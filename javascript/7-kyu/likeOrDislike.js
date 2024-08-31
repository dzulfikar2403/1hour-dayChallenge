const likeOrDislike = (btn) => {
  const lastActive = btn.slice(-1).join("");
  let like = [];
  let dislike = [];
  
  if(btn.length === 0) return "Nothing"
  for(val of btn){
    val === "Like" && like.length % 2 === 0 ? like.push("Like") : like.length % 2 === 1 && like.push("Nothing");
    val === "Dislike" && dislike.length % 2 === 0 ? dislike.push("Dislike")  : dislike.length % 2 === 1 && dislike.push("Nothing");
  }

  return lastActive === "Like" ? like[like.length -1] : dislike[dislike.length -1];
}

console.log(likeOrDislike([]));
 