function count_views_or_upvotes(str) {

  if (!+str[0]) str = str.substring(5);

  let i;
  let answer;

  for (i = 0; i < str.length; i++){
    if (str[i] === ' ') {
      answer = +str.substring(0, i);
      break;
    } else if (str[i] === 'k') {
      answer = +str.substring(0, i);
      answer *= 1000;
      break;
    } else if (str[i] === 'm') {
      answer = +str.substring(0, i);
      answer *= 1000000;
      break;
    }   
  }
  
  return answer;
}


setInterval(() => {

  let allfooters = document.querySelectorAll('.AnswerFooter.ReadingContentFooter.ContentFooter');

  for (let footer of allfooters) {
    let answer = {};
    for (let child of footer.children){
      if (!(child.textContent.includes('views') || child.textContent.includes('Upvoters'))) continue;
      if (child.textContent.includes('views')) {
        answer.views = count_views_or_upvotes(child.textContent);
      } else {
        answer.upvotes = count_views_or_upvotes(child.textContent);
      }
    }
    
    for (let cc of footer.children) {
      if (cc.id !== "noomericbobsagooo123123") continue;

      cc.parentNode.removeChild(cc);
      
    }

    const numericratio = (answer.upvotes / answer.views);
    const ratio = document.createElement('span');
    ratio.setAttribute("id", "noomericbobsagooo123123");
    ratio.textContent = ' | ' + (numericratio*100).toFixed(2) + '% People Upvoted';
    footer.append(ratio);
    }

}, 1500);







