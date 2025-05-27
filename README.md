![Xnapper-2025-05-27-09 11 44](https://github.com/user-attachments/assets/de065a1f-0a91-4932-a213-44364dcaf0fa)

## ⚙️ Tech Stack
- **Framework:** Next.js with Typescript
- **Style:** Tailwind, Shadcn UI
- **Data Fetching & Caching:** React Query
- **Form & Validation**: React Hook Form with Zod
- **Authentication:** NextAuth, Okta

## 🚩 Getting Started
1. Create a `.env` file
   
   ```dosini
    SECRET=
    OKTA_CLIENT_ID=
    OKTA_CLIENT_SECRET=
    OKTA_ISSUER=
    TWELVE_DATA_API_KEY=
   ```
SECRET is used for NextAuth and could be generated with this command: openssl rand -base64 32

2. Install npm packages
   ```sh
   npm install
   ```
   
3. Start the server
   ```sh
   npm run dev
   ```
