### USE CONTEXT 

1. What is Context in React?

Context is like a shared box of data.
You put the data inside the box (using a *Provider*).
Any component inside the tree can open the box and take the data (using useContext).
This way, you don’t need to pass props through many components that don’t use them.

2. When should you use useContext?

You use it when:
A value is needed by many components.
Passing props becomes too long or too complicated.

Example:
You have App → A → B → C → D
If only D needs the data, without context you would pass it through A, B, C.
With context, you put the data in a Provider at the top, and D can take it directly.

3. Where can you use useContext?
Only inside a function component.
The component must be inside the Provider.
If it is outside, it will not find the data.

4. My code as an example

I created a **context SizeImage**
In contex.js
in app i wrapped everything with:

<SizeImage.Provider value={ imageSize }>
  <List />
</SizeImage.Provider>


Here i put the value imageSize inside the box.
Later, in PlaceImage:

function PlaceImage() {
  const  imageSize  = useContext(SizeImage); // opening the box
  return <img width={imageSize} height={imageSize} />;
}

Here i open the box and get the value.

 Think about it like this:
Provider = put the data in the box.
useContext = open the box where you need it.
