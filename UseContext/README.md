# USE CONTEXT IN REACT ( *COURSE MADE BY ME* )

## 1. What is Context in React?


Context is like a shared box of data.
You put the data inside the box (using a *Provider*).
Any component inside the tree can open the box and take the data (using useContext).
This way, you don’t need to pass props through many components that don’t use them.

## 2. When should you use useContext?


You use it when:
A value is needed by many components.
Passing props becomes too long or too complicated.

Example:
You have 

App → A → B → C → D


If only D needs the data, without context you would pass it through A, B, C.
With context, you put the data in a Provider at the top, and D can take it directly.

## 3. Where can you use useContext?


Only inside a function component.
The component must be inside the Provider.
If it is outside, it will not find the data.

## 4. My code as an example


I created a **context SizeImage**
In contex.js
in app i wrapped everything with:

```
<SizeImage.Provider value={ imageSize }>
  <List />
</SizeImage.Provider>
```

Here i put the value imageSize inside the box.
Later, in PlaceImage:

```
function PlaceImage() {
  const  imageSize  = useContext(SizeImage); // opening the box
  return <img width={imageSize} height={imageSize} />;
}
```

Here i open the box and get the value.

---
 Think about it like this:
Provider = put the data in the box.
useContext = open the box where you need it.


 ### MORE EXAMPLES : 


 ## Example 1: Theme (Light / Dark)

**Goal: Change button style depending on the theme**

```
import { createContext, useContext } from "react";

// 1. Create the context
const ThemeContext = createContext();

function App() {
  // 2. Put the value inside Provider
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <Button />
    </div>
  );
}

function Button() {
  // 3. Use the context where you need it
  const theme = useContext(ThemeContext);
  return <button>{theme === "dark" ? "Dark Button" : "Light Button"}</button>;
}

```
✔ The Button does not need props. It can read the theme directly from the context.

## Example 2: User Login Information

Goal: Show current user info without sending props everywhere.


```
import { createContext, useContext } from "react";

// 1. Create the context
const UserContext = createContext();

function App() {
  const user = { name: "Lina", role: "student" };

  // 2. Provide the user data
  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  // 3. Use the user data inside any child
  const user = useContext(UserContext);
  return <h2>Welcome, {user.name}! You are a {user.role}.</h2>;
}
```
✔ The Profile can use the user object directly from context.
