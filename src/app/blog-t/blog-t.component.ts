import { Component } from '@angular/core';
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { BlogSideComponent } from "../blog-side/blog-side.component";
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";

@Component({
  selector: 'app-blog-t',
  standalone: true,
  imports: [IpromiseFooterComponent, BlogSideComponent, IpromiseHeaderComponent],
  templateUrl: './blog-t.component.html',
  styleUrl: './blog-t.component.scss'
})
export class BlogTComponent {

}function handleShareClick(event: Event): void {
  event.preventDefault();

  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (isLoggedIn) {
    copyCurrentURL();
  } else {
    const popup = window.open(
      "/login.html",
      "LoginWindow",
      "width=500,height=500"
    );

    const interval = setInterval(() => {
      if (popup?.closed) {
        clearInterval(interval);

        // After login, you’d have set localStorage in the popup
        const loggedIn = localStorage.getItem("loggedIn") === "true";
        if (loggedIn) {
          copyCurrentURL();
        } else {
          alert("Login cancelled.");
        }
      }
    }, 500);
  }
}

function copyCurrentURL(): void {
  const url: string = window.location.href;
  navigator.clipboard.writeText(url)
    .then(() => {
      alert("URL copied to clipboard!");
    })
    .catch((err: unknown) => {
      console.error("Failed to copy:", err);
    });
}

