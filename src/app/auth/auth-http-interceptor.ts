import {
    HttpHandler
    , HttpInterceptor
    , HttpRequest
    , HttpEvent
    , HttpEventType
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, Observable, tap } from "rxjs";



@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedRequest = req.clone({
            withCredentials: true
        })
        return next.handle(modifiedRequest)
          /*  .pipe(
                filter(val=> val.type === HttpEventType.Response),
                tap((val) => {
                    console.log('Received Response from server',val)
                })
            )*/
    }

}
