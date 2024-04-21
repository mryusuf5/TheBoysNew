import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {BannerComponent} from "../../components/banner/banner.component";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {FormGroup, FormControl} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ApiServiceService} from "../../services/api-service.service";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {SuggestionCardComponent} from "../../components/suggestion-card/suggestion-card.component";
import {Suggestion} from "../../models/Suggestion";
import {ProgressComponent} from "../../components/progress/progress.component";
import {AuthService} from "@auth0/auth0-angular";
import {Creator} from "../../models/Creator";
import {SuggestionWithSimilarity} from "../../models/Suggestion";
import {Auth0Service} from "../../services/auth0.service";
import {UserService} from "../../services/user.service";
import {SuggestionService} from "../../services/suggestion.service";
import {TeamService} from "../../services/team.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, CKEditorModule, ReactiveFormsModule, CommonModule, ToastrModule, SuggestionCardComponent, ProgressComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private apiService: ApiServiceService,
              private toast: ToastrService,
              public auth: AuthService,
              private renderer: Renderer2,
              private auth0Service: Auth0Service,
              private userService: UserService,
              private suggestionService: SuggestionService,
              private teamService: TeamService) {
  }

  public Editor = ClassicEditor;
  public imageSrc: string | ArrayBuffer;
  public errorMessage: string = "";
  public suggestionsArray: any[];
  public postSuggestion: Suggestion;
  public sendSuggestionBool: boolean = false;
  public suggestionDataLoaded: boolean = false;
  public pollActive: boolean = false;
  public suggestionImage: any = null;
  public user: any;
  public users: Creator[] = [];
  public similarSuggestions: any;
  public polls: any;

  @ViewChild('closeButton') closeButton!: ElementRef;
  @ViewChild('openSimilarSuggestionsButton') openSimilarSuggestionsButton!: ElementRef;

  public suggestionForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl<string>(""),
    image: new FormControl<HTMLInputElement>(null)
  });

  ngOnInit()
  {
    this.teamService.getTeam("1").subscribe((e:any) => {
      if(e)
      {
        this.polls = e;
        console.log(this.polls);
        this.pollActive = true;
      }
    })

    this.auth0Service.getAccessToken().subscribe((access: any) => {
      localStorage.setItem("access_token", access.access_token);
      this.getSuggestions();
    })

    this.auth.user$.subscribe((user) => {
      this.user = user;

      this.userService.getUser(this.user.sub).subscribe((e: any) => {
      }, (err) => {
        if (err.status == 404)
        {
          this.userService.createUser(this.user.sub).subscribe((s) => {
          })
        }
      })
    })
  }

  public getSuggestions()
  {
    this.auth0Service.getAllUsers(localStorage.getItem("access_token")).subscribe((creators: Creator[]) => {
      this.users = creators
      this.suggestionService.getSuggestions().subscribe((e: Suggestion[]) => {

        this.suggestionsArray = e;

        this.suggestionsArray.forEach((suggestionArray: any) => {
          this.users.forEach((user: any) => {
            if(suggestionArray.creator.id === user.user_id)
            {
              suggestionArray.creator.name = user.name;
              suggestionArray.creator.creatorPicture = user.picture;
            }
          })
        })

        setTimeout(() => {
          this.suggestionDataLoaded = true;
        })

      })

    })
  }

  public reloadSite()
  {
    window.location.reload();
  }

  public closeModal() {
    // Trigger click event on the close button
    this.renderer.selectRootElement(this.closeButton.nativeElement).click();
  }

  public openSimilarSuggestionsModal() {
    this.renderer.selectRootElement(this.openSimilarSuggestionsButton.nativeElement).click();
  }

  public togglePoll()
  {
    this.pollActive = !this.pollActive;
  }

  public sendSuggestion()
  {
    if(this.suggestionForm.controls.name.value == "")
    {
      this.toast.error("Naam van het uitje moet ingevuld worden");
      return;
    }

    if(this.suggestionForm.controls.description.value == "")
    {
      this.toast.error("Beschrijving van het uitje moet ingevuld worden");
      return;
    }

    const data: Suggestion = {
      CreatorId: this.user.sub,
      Title: this.suggestionForm.controls.name.value,
      Description: this.suggestionForm.controls.description.value,
    };

    const image = new FormData();

    if(this.suggestionImage)
    {
      image.append("image", this.suggestionImage, this.suggestionImage.name);
    }

    this.sendSuggestionBool = true;

    this.suggestionService.postSuggestion(data, image).subscribe((e: SuggestionWithSimilarity[]) => {

      if(e)
      {
        this.similarSuggestions = e;
        setTimeout(() => {
          this.openSimilarSuggestionsModal();
        })
        return
      }

      this.sendSuggestionBool = false;
      this.closeModal();
      this.toast.success('Suggestie verstuurd!');
      this.suggestionForm.controls.name.reset();
      this.suggestionForm.controls.description.reset();
      this.suggestionForm.controls.image.reset();
      this.imageSrc = "";
      this.getSuggestions();

    }, (err) => {
      console.log(err.error);
      this.sendSuggestionBool = false;
      this.toast.error("Deze uitje bestaat al!")
    })
  }

  public sendSuggestionOverride()
  {
    const data: Suggestion = {
      CreatorId: this.user.sub,
      Title: this.suggestionForm.controls.name.value,
      Description: this.suggestionForm.controls.description.value,
    };

    const image = new FormData();

    if(this.suggestionImage)
    {
      image.append("image", this.suggestionImage, this.suggestionImage.name);
    }

    this.suggestionService.postSuggestionOverride(data, image).subscribe((e) => {
      console.log(e)
      this.toast.success('Suggestie verstuurd!');
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    })
  }

  public showImage(e)
  {
    this.suggestionImage = e.target.files[0];

    if(e.target.files[0].size > 3000000)
    {
      this.toast.error("Afbeelding is te groot");
      this.suggestionForm.controls.image.setValue(null);
      return;
    }

    if (this.suggestionImage) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(this.suggestionImage);
    }
  }
}
