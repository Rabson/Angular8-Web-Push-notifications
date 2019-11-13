import { PushNotificationsService } from "ng-push"; //import the service
import { isPlatformBrowser } from "@angular/common";
import { Component, Inject, PLATFORM_ID, Injector } from "@angular/core";
interface PushNotification {
  body?: string;
  icon?: string;
  tag?: string;
  renotify?: boolean;
  silent?: boolean;
  sound?: string;
  noscreen?: boolean;
  sticky?: boolean;
  dir?: "auto" | "ltr" | "rtl";
  lang?: string;
  vibrate?: number[];
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Web push Notifications!";
  private _push: PushNotificationsService;

  constructor(
    private _pushNotifications: PushNotificationsService,
    @Inject(PLATFORM_ID) platformId: string,
    private injector: Injector
  ) {
    console.log(isPlatformBrowser(platformId), platformId);
    if (isPlatformBrowser(platformId)) {
      //inject service only on browser platform
      this._push = this.injector.get(PushNotificationsService);
      console.log(this._push);
    }
    _pushNotifications.requestPermission(); // request for permission as soon as component loads
  }

  notify() {
    //our function to be called on click
    let options: PushNotification = {
      //set options
      body: "working!",
      icon: "assets/images/ironman.png" //adding an icon
    };
    let notify = this._pushNotifications
      .create("test push notification.", options)
      .subscribe(
        res => {
          console.log(res.event.type);
          if (res.event.type === "click") {
            res.notification.close();
          }
        },
        error => {
          console.log(error);
        }
      );
  }
}
