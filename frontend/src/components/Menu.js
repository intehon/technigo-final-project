import React from 'react'

export const Menu = () => {

  return (
    <div>
      <form action="/uploadfile" enctype="multipart/form-data" method="POST"> 
        <input type="file" name="myFile" />
        <input type="submit" value="Upload a file"/>
      </form> 
    </div>
  )
}
