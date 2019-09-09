import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallsService {


 apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
 apiKey = '5949094591d487f83818c8de';

 attributesToRetrieve = 'name,domain,releasedAt,text,previewImage';

 body = JSON.stringify({
   /* Query is the search query, to make search inside the news */
   query: 'Luxury',
   /*
   You can add many others attributesToRetrieve. Here the usefull ones:
       - name (Article title)
       - url (article url)
       - domain (The name of the website which published the news)
       - excerpt (Small excerpt of the news, usefull for a preview)
       - text (All the HTML content of the news)
       - previewImage (the “Featured image” of the news)
       - releasedAt (Publication date of the article in a milliseconds timestamp)
       - _tags (contain the tags of the news. The tags which are marked “visible: false” should not be shown by the interface)
       */
      attributesToRetrieve: ['name', 'domain', 'excerpt', 'previewImage', 'releasedAt', '_tags'],
      /*
      The pagination start with page 1. You cannot infinitely paginate, the API will block you after 1000 results.
      */
     page: 5,
   /*
   With hitsPerPage, you can specify how much results by page you wish to retrieve. You cannot ask for more than 1000 items.
   */
  hitsPerPage: 15,
  /*
  You can filter any value by typing key:“value”. You can do more complex filters, like:
  domain:"star24.tv" AND (_tags.name:"Uniqlo" OR _tags.name:"Prada")
  */
 filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
 });

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.post(`${this.apiUrl}/query`,	this.body, {headers: {

      'x-algolia-key': this.apiKey

    }
    });
  }

  getDomains() {
    return this.http.post(`${this.apiUrl}/query`,
      JSON.stringify({
        /* On this example, we don't need any “hits” result, because we use another feature: The facets! See below. */
        hitsPerPage: 0,
        facets: 'domain'
      }),
      { headers: {
        'x-algolia-key': this.apiKey
      }
      }
    )
}


}
