import { Routes } from '@angular/router';
import { IpromiseHomeComponent } from './ipromise-home/ipromise-home.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageProjectsComponent } from './page-projects/page-projects.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { PageClientsComponent } from './page-clients/page-clients.component';
import { RimJcsComponent } from './rim-jcs/rim-jcs.component';
import { RimApostolicComponent } from './rim-apostolic/rim-apostolic.component';
import { RimPropheticComponent } from './rim-prophetic/rim-prophetic.component';
import { RimMinistryComponent } from './rim-ministry/rim-ministry.component';
import { RimMeetingComponent } from './rim-meeting/rim-meeting.component';
import { RimMessageComponent } from './rim-message/rim-message.component';
import { BlogAComponent } from './blog-a/blog-a.component';
import { BlogBComponent } from './blog-b/blog-b.component';
import { BlogCComponent } from './blog-c/blog-c.component';
import { BlogDComponent } from './blog-d/blog-d.component';
import { BlogEComponent } from './blog-e/blog-e.component';
import { BlogFComponent } from './blog-f/blog-f.component';
import { BlogGComponent } from './blog-g/blog-g.component';
import { BlogIComponent } from './blog-i/blog-i.component';
import { BlogHComponent } from './blog-h/blog-h.component';
import { BlogJComponent } from './blog-j/blog-j.component';
import { BlogKComponent } from './blog-k/blog-k.component';
import { BlogLComponent } from './blog-l/blog-l.component';
import { BlogMComponent } from './blog-m/blog-m.component';
import { BlogNComponent } from './blog-n/blog-n.component';
import { BlogOComponent } from './blog-o/blog-o.component';
import { BlogPComponent } from './blog-p/blog-p.component';
import { BlogQComponent } from './blog-q/blog-q.component';
import { BlogRComponent } from './blog-r/blog-r.component';
import { BlogSComponent } from './blog-s/blog-s.component';
import { BlogTComponent } from './blog-t/blog-t.component';
import { BlogZComponent } from './blog-z/blog-z.component';
import { BlogUComponent } from './blog-u/blog-u.component';
import { RimNotfoundComponent } from './rim-notfound/rim-notfound.component';

export const routes: Routes = [
    { path: '', component: IpromiseHomeComponent, title: 'Home | Royal International Ministries - RIM' },
    { path: 'jcs', component: RimJcsComponent, title: 'JITHU CS | Royal International Ministries - RIM' },
    { path: 'apostolic', component: RimApostolicComponent, title: 'Apostolic | Royal International Ministries - RIM' },
    { path: 'prophetic', component: RimPropheticComponent, title: 'Prophetic | Royal International Ministries - RIM' },
    { path: 'ministry', component: RimMinistryComponent, title: 'Ministry | Royal International Ministries  -RIM' },
    { path: 'meeting', component: RimMeetingComponent, title: 'Meeting | Royal International Ministries - RIM' },
    { path: 'message', component: RimMessageComponent, title: 'Message | Royal International Ministries - RIM' },
    { path: 'home', component: IpromiseHomeComponent, title: 'Home | Royal International Ministries - RIM' },

    { path: 'the-genesis-of-jcs-in-the-name-of-jesus-christ', component: BlogAComponent, title: 'JITHU CS | Royal International Ministries - RIM' },
    { path: 'the-prophetic', component: BlogBComponent, title: 'The Prophetic | Royal International Ministries - RIM' },
    { path: 'the-apostolic', component: BlogCComponent, title: 'The Apostolic | Royal International Ministries - RIM' },
    { path: 'world-prophecies', component: BlogDComponent, title: 'World Prophecies | Royal International Ministries - RIM' },

    // { path: 'abba-father', component: BlogEComponent, title: 'Abba Father | Royal International Ministries - RIM' },
    // { path: 'jesus-christ', component: BlogFComponent, title: 'Jesus Christ | Royal International Ministries - RIM' },
    // { path: 'holy-spirit', component: BlogGComponent, title: 'Holy Spirit | Royal International Ministries - RIM' },
    { path: 'blog/:id', component: BlogGComponent, title: 'JCS Spirit | Royal International Ministries - RIM' },

    { path: 'supernatural', component: BlogJComponent, title: 'Supernatural | Royal International Ministries - RIM' },
    { path: 'superstars', component: BlogKComponent, title: 'Filmstars | Royal International Ministries - RIM' },
    { path: 'bigwig', component: BlogLComponent, title: 'Bigwig | Royal International Ministries - RIM' },

    { path: 'dominion', component: BlogMComponent, title: 'Dominion | Royal International Ministries - RIM' },
    { path: 'various-miracles', component: BlogNComponent, title: 'Various Miracles  | Royal International Ministries - RIM' },
    { path: 'signs-and-wonders', component: BlogOComponent, title: 'Signs And Wonders | Royal International Ministries - RIM' },
    { path: 'gifts', component: BlogPComponent, title: 'Gifts | Royal International Ministries - RIM' },

    { path: 'district-prophecies', component: BlogQComponent, title: 'District Prophecies | Royal International Ministries - RIM' },
    { path: 'state-prophecies', component: BlogRComponent, title: 'State Prophecies | Royal International Ministries - RIM' },
    { path: 'national-prophecies', component: BlogSComponent, title: 'National Prophecies | Royal International Ministries - RIM' },
    { path: 'global-prophecies', component: BlogTComponent, title: 'Global Prophecies | Royal International Ministries - RIM' },

    { path: 'mission-and-ministry', component: BlogHComponent, title: 'MISSION AND MINISTRY | Royal International Ministries - RIM' },
    { path: 'royal-international-ministries', component: BlogIComponent, title: 'RIM | Royal International Ministries - RIM' },
    { path: 'jcs-rim', component: BlogZComponent, title: 'JITHU CS | Royal International Ministries - RIM' },
    { path: 'the-kings-write', component: BlogUComponent, title: 'The Kings Write | Royal International Ministries - RIM' },
    { path: '**', component: RimNotfoundComponent, title: 'Page Not Found | Royal International Ministries - RIM' },


];