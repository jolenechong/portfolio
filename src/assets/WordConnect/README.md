# Word Connect
I wanted to experiment with websockets. Started this project quite awhile ago so its mostly with SCSS styling but added tailwind recently, also went back to reformat some of the code with react contexts.
<br/>

<img src="../WordConnect.webp" alt="thumbnail image for word connect web application"/><br/>

Basically just Word Connect on its own, similar to Shopee Words. My family plays it a lot so i wanted to do something similar but make it collaborative and on the web instead.

Table of Contents
- [What I Did (A Quick Overview)](#what-i-did)
- [How It Works](#how-it-works)
- [My Process](#my-process)
    - [Overview of my Backend](#the-backend)
    - [Overview of my Frontend](#the-frontend)
- [Possible Future Enhancements](#possible-future-enhancemennts)

## What I Did
- MERN Application with WebSockets
- SCSS and Tailwind (mostly built with SCSS)
- Has JWT Authentication with Verify.ts for middleware
- Algorithm to generate word connect matrixes built with backtracking algorithm
- Words that are used in the algorithm cleaned and categorised from https://github.com/dwyl/english-words

## How it Works
![Starting a Session](wordConnectDemo.gif)<br/>

On the left we can see that the user is signed in while on the right the user is not. 
- When signed in, they can keep track of the number of puzzles they've completed nd not do the same puzzle again
- User 1 (left) starts a session and creates a room. 
- Unfortunately due to the free plan limitations of Render.com, WebSockets only remain open for 5 minutes.
- User 1 shares the link with User 2
- They are both now in the same room and can play together
- Incorrect words cause the words to vibrate and the key panel to turn red as indication
- Correct words are then mirrored to everyone in that room

When the session ends, this would be shown to users
<img src="wordConnectSessionEnd.png" alt="Connection Ended Screenshot"/>
<br/>
Then, they can also continue playing the game on their own.

## My Process
If you're interested to know how I planned and created this project, I've written key points I encounteresd during the building of this application. First, I knew I needed a server in order to not only persist data like user and matrixes but also to support WebSockets and as we now know I chose to go with MERN tech stack hence MongoDB would be my database.

### The Backend
The first thing I did was create the program to find words and an algorithm in order to generate matrixes, then I had to think about how exactly i can present and send my matrixes for it to display well in the frontend. Since I only had the Shopee Words app as reference, I had to first decide on my architecture.

Here are the keypoints of what I did:
- Script to generate a JSON file from a text file with all words that will be used in the algorithm
    - I realised the best way to organise my words in order to create a fast algortihm was to organise words by their length. As Shopee Words has 1 long word and the rest of the words are built of of that long word.
- Matrix generation using Back-tracking and storing matrix
    ``` typescript
    // i first created a program where i get words from 1 long word
    // then next i passed it through the back-tracking algorithm forming an object like below

    longWordShuffled: string;
	words: Object;
	matrix: Array<Array<string>>;
    ```
- Added JWT Authentication, Login and Signup with middleware to verify users on each request
- CRUD for Matrix, we would only need get, and edit (for when matrixes are completed by each user)
- Proxy in the server
    - I wanted to be able to view the frontend pages and backend api in the same port
        ```javascript
        if (process.env.NODE_ENV === 'production') {
            // Set static folder up in production
            app.use(express.static('../client/build'));
            app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, '../client', 'build','index.html')));
        }else if(process.env.NODE_ENV === 'development'){
            const feProxy = proxy("http://localhost:3000", {
            proxyReqPathResolver: (req) => url.parse(req.originalUrl).path || ""
            });
            app.use("/*", feProxy);
        }
        ```
- For the WebSockets part of things, I decided to send a message everytime someone gets a word right
    - I decided against using socket.io purely because I wanted to gain a better understanding of WebSockets itself
    - I also needed a room system, by saving a object in the server of current rooms open
    - Each message has a type and params
        - Types: create, join, leave, matrixUpdate, notification, close (only added this in order to remove room when its closed from frontend due to Render.com)
        - Params: Stores information like matrixes or notification contents etc.

### The Frontend
I first decided on the pages needed, Home | Play | 404. `/play/<roomid>` would be dynamic in order to separate players in rooms.

Here's how my file structure looked:
```
├── client/
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   ├── home
│   │   │   ├── modals
│   │   │   ├── notificationBox
│   │   ├── contexts (I needed 3 contexts, dash-context + user-context + model-context)
│   ├── public
│   ├── node_modules
│   ├── ...
│   └── package.json
```

- I decided to use contexts as it would be easier to manage state vs only using setState and passing it to children components
    ```typescript
    // for dash-context, which gets a matrix on laod
    interface DashInfo {
        matrixID: string;
        matrix: Array<Array<string>>;
        selectedMatrix: Array<Array<boolean>>;
        words: Array<string>;
        doneWords: Array<string>;
        letters: Array<ILetter>;
        room?: string;
    }

    // for modal-context (needed this cuz I had a lot of different modals)
    // used dispatchModalEvent in order to change modalType (similar in dashInfo)
    export interface ModelInfo {
        state: boolean;
        modalType: string;
    }

    // for user-context
    interface IUserInfo {
        id?: any;
        email?: string;
        name?: string;
        count?: number;
        isAuthenticated: boolean;
    }
    ```
- Displaying the Matrix
    ```typescript
        // i found this part abit more complicated but interesting to do
        dashInfo?.matrix.map((row, i) => (
          <div key={i} className={styles.row}>
            {row.map((col, j) =>
              // text is in col variable
              col === " " ? (
                <span key={j} className={styles.column}></span>
              ) : (
                <span key={j} className={`${styles.box} ${styles.column}`}>
                  {dashInfo.selectedMatrix[j][i] ? col : ''}
                </span>
              )
            )}
          </div>
        ))
    ```
- Of course what's left was using TailwindCSS and SCSS to build out the rest of the frontend pages and maintaining states and what not.

Lastly, I also handled deployment with Render.com and wrote about it here: <br/>
https://dev.to/jolenechong/how-to-deploy-mern-application-on-rendercom-a-heroku-alternative-kim

And That's It!

## Possible Future Enhancemennts
- [ ] Changing the Dictionary I used and Maybe adding Meaning of the words https://github.com/matthewreagan/WebstersEnglishDictionary
- [ ] Looking for another hosting alternative that would allow websockets to stay open longer than 5 minutes
- [ ] Add saving to LocalStorage for signed in users
- [ ] Adding Light Mode

## Contact
Jolene - [jolenechong7@gmail.com](mailto:jolenechong7@gmail.com) <br>
