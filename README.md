## 📘 Employee Management System (Frontend - Angular)

### 🛠 Tech Stack
- **Framework**: Angular 19.0.5
- **Language**: TypeScript
- **Runtime**: Node.js (latest LTS)
- **Dev Server**: Angular CLI (ng serve)

---

### 🚀 Local Development Setup

#### 📋 Prerequisites
- Node.js & npm
- Angular CLI (`npm install -g @angular/cli`)

#### 📁 Setup Steps
1. Clone the frontend repository:
   ```bash
   git clone <frontend-repo-url>
   cd employee-management-system-gui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Verify proxy configuration (for local development to communicate with EC2 backend):
   Create `proxy.conf.json` if not already present:
   ```json
   {
     "/api/*": {
       "target": "http://<EC2-PUBLIC-IP>:8080",
       "secure": false,
       "logLevel": "debug",
       "changeOrigin": true,
       "pathRewrite": {
         "^/api": ""
       }
     }
   }
   ```
   > Replace `<EC2-PUBLIC-IP>` with the actual public IP of your EC2 instance.

4. Ensure `angular.json` includes:
   ```json
   "serve": {
     "options": {
       "proxyConfig": "proxy.conf.json"
     }
   }
   ```

5. Configure HttpClient in `app.config.ts`:
   ```typescript
   import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

   export const appConfig: ApplicationConfig = {
     providers: [
       // ... other providers
       provideHttpClient(withFetch(), withInterceptorsFromDi()),
     ],
   };
   ```

6. Run the frontend:
   ```bash
   npm run start:dev
   ```
   Access at: [http://localhost:4200](http://localhost:4200)

---

### 🌍 Environment Configuration
#### environment.ts (for development)
```ts
export const environment = {
  production: false,
  apibaseurl: '/api'
};
```

#### environment.prod.ts (for future S3/Cloud deployment)
```ts
export const environment = {
  production: true,
  apibaseurl: 'http://<EC2-PUBLIC-IP>:8080' // Replace with your EC2 IP
};
```

---

## 🧪 API Testing
Use Postman or curl:
```bash
curl http://<EC2-PUBLIC-IP>:8080/departments
```

Make sure EC2 security group allows port 8080 from your IP (or 0.0.0.0/0 for testing).

---

## ☁️ Troubleshooting
| Issue | Reason | Fix |
|-------|--------|-----|
| CORS Error | CORS not configured properly in Spring Boot | Ensure EC2 IP & localhost are in `spring.web.cors.allowed-origins` |
| Timeout | Security group blocking | Add port 8080 rule in inbound settings for your IP |
| 500 Internal Server Error | Misconfigured backend or invalid payload | Check backend logs using `tail -f app.log` |
| NullInjectorError for HttpClient | Missing HttpClient provider in standalone components | Add `provideHttpClient(withFetch(), withInterceptorsFromDi())` to app.config.ts providers |
| HTTP Client not working in standalone components | Incorrect HttpClient configuration | Ensure HttpClient is properly configured in app.config.ts and components |

---

## 📦 Scripts Summary
| Command | Description |
|---------|-------------|
| `npm start` | Runs `ng serve` with proxy config |
| `npm run start:dev` | Development mode with proxy (to EC2 backend) |
| `npm run clean` | Deletes `dist/` build |

---

## 🔧 Common Issues and Solutions

### HttpClient Configuration
When using standalone components with HttpClient, you might encounter the following error:
```
ERROR Error [NullInjectorError]: R3InjectorError(Standalone[_Component])[_Service -> _Service -> _HttpClient -> _HttpClient]: 
  NullInjectorError: No provider for _HttpClient!
```

To fix this:
1. Add HttpClient configuration in `app.config.ts`:
   ```typescript
   import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

   export const appConfig: ApplicationConfig = {
     providers: [
       // ... other providers
       provideHttpClient(withFetch(), withInterceptorsFromDi()),
     ],
   };
   ```

2. For standalone components, ensure services are provided at the root level:
   ```typescript
   @Injectable({
     providedIn: 'root'
   })
   export class YourService { }
   ```

3. If needed, provide HttpClient in the component:
   ```typescript
   @Component({
     // ...
     providers: [YourService, HttpClient]
   })
   ```

---