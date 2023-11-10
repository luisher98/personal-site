# Luis Hernández personal app

This is the front end of my personal site that covers my experience, projects and myself.


## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm or yarn installed

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/luisher98/personal-site.git
2. Navigate to the project directory:
   ```
   cd personal-site
3. Install dependencies
   ```
   npm install
   # or
   yarn install
4. Start the next.js application
    ```
   npm run dev

5. Create .env.local and add the following
   ```
   API_URL = http://localhost:3500
   
6. Start the json-server in a new terminal window
   ```
   npx json-server -p 3500 -w ./data/data.json 