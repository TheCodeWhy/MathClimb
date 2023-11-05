function main() {

  const package = data()
  //var img = document.getElementById("scsh");
  var title = document.getElementById("title");
  title.textContent = package[0];
  //img.src = package[3];


  const outputDiv = document.getElementById("desc");
  const d = package[1].split('|');
  d.forEach((string,index) => {
    const p = document.createElement("p");
    p.textContent = string;
    if(index%2 === 0){
      p.classList.add("listdesc");
    } else {
      p.classList.add("tlistdesc");
    }
    outputDiv.appendChild(p);
  });

  const image = document.getElementById("playstore");

  image.addEventListener("click", function() {
    window.location.href = package[3];
  });

  const pp = document.getElementById("privacy");
  pp.addEventListener("click", function() {
    window.location.href = package[4];
  });
  
}
main();
















function data(){
  const title = "Math Climb";
  const description = "|Challenge Your Mind, One Step at a Time!|"
  +"Embark on an exhilarating journey as you ascend the staircase, with each step representing a unique mathematical puzzle. Engage your intellect with lightning-fast problem-solving techniques and discover the sheer joy of unraveling mathematical concepts on this thrilling voyage."
  +"|Elevate Your Intellectual Pursuits|"
  +"Dive into a world where the steps seem endless, each adorned with its own numerical challenge. Engage your mind in solutions that exercise both hemispheres of your brain, unveiling hidden numerical relationships and uncovering the quickest paths. Brace yourself to expand your intellect and enrich your cognitive abilities."
  +"|Climbing for All Seekers|"
  +"These captivating games captivate individuals of all ages and backgrounds. As you navigate the steps, logical equations forge new connections, refining your critical thinking and problem-solving prowess. Strengthen the neural bonds within your brain and evolve into a virtuoso of intellectual exploration."
  +"|Unraveling the Puzzle Maze|"
  +"Traverse steps that test your intellectual mettle. Decode intricate equations mentally, decipher logical connections, and unlock their enigmatic secrets. As you progress, your analytical skills will unveil patterns and surmount obstacles with finesse."
  +"|Benefits of Logical Problem-Solving|"
  +"Enhance focus and concentration through captivating logical challenges. Foster memory retention and sharpen perception, fortifying your mental faculties. Amplify academic and everyday performance through these educational games. Broaden your horizons with brain-teasers that unleash your intellectual potential. Find solace and relief from stress through the power of logical connections."

+"|Embark on an Adventure of Intellectual Discovery|"

+"\nAccept the challenge of shattering records."
+"\nEncounter increasingly intricate and stimulating connections."
+"\nHone your problem-solving skills and logical acumen."
+"\nTrain both sides of your brain for a holistic cognitive experience."
+"\nDiscover purpose and fulfillment in your leisure time.";
  const logo = "R/maze/mazeLogo.png";
  const link = "https://play.google.com/store/apps/details?id=com.codewhy.mathclimb";
  const policy = "https://thecodewhy.github.io/mathclimb_pp/"
  return [title,description,logo,link,policy]
}
