const friend = (friends) => friends.filter((el) => el.length === 4 && !parseInt(el));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
