# AI Job Preparation Platform

This is a Next.js 14 project designed to help job seekers prepare for interviews through AI-powered question generation. The platform generates personalized quizzes based on user input, helping candidates to practice for the roles they’re targeting.

## Features

- AI-powered question generation
- Personalized quizzes based on user skills and roles
- Trusted by professionals at top companies
- Integration with OpenAI and Clerk for secure authentication
- Seamless user experience with cutting-edge Next.js 14 features

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **API**: OpenAI
- **Deployment**: Vercel

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js v18+ installed
- npm or yarn installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ai-job-prep-platform.git
   ```

2. Navigate into the project directory:

   ```bash
   cd ai-job-prep-platform
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory and add the following environment variables:

   ```bash
   OPENAI_API_KEY=
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CONVEX_URL=
   ```

### Running the Application

Once the environment variables are set up, start the development server:

    ```bash
    npm run dev
    ```

### Environment Variables

The following environment variables are required for the project:

OPENAI_API_KEY: Your OpenAI API key for generating AI-powered questions.
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: The publishable key from Clerk for handling authentication.
CLERK_SECRET_KEY: The secret key from Clerk.
NEXT_PUBLIC_CONVEX_URL: Convex cloud URL used in the project.

### Contributing

Feel free to submit issues or pull requests if you'd like to contribute to the project.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
