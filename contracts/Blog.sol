// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Blog{
    
    struct Post{
         string title;
         string description;
         bool status;
         address author;
    }

    Post[] public posts;

    function addPost(string memory _title,string memory _des) public{
        Post memory newPost=Post(_title,_des,false,msg.sender);
        posts.push(newPost);
    } 

    function getPost(uint256 index) public view returns (string memory title,string memory desc,bool status,address owner) {
         require(index < posts.length, "Post does not exist.");
         Post memory currentPost=  posts[index];
         return (currentPost.title, currentPost.description,currentPost.status, currentPost.author);
    }

    function getNumOfPost () public view returns (uint256 length){
        return posts.length;
    }

    function getAllPost() public view returns (Post[] memory) {
        return posts;
  }

}