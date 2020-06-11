import React, { useEffect, useState } from 'react';
import marked from 'marked'
import './styling/page.css'
import './styling/collpase.css'

function App() {
  const inquirymd = './Inquiry.md'
  const proposalmd = './Proposal.md'
  const [inquiry, setInquiry] = useState('Fetching');
  const [proposal, setProposal] = useState('Fetching')

  useEffect(() => {
    fetch(inquirymd).then(r => r.text()).then(md => {
      setInquiry(marked(md))
    })

    fetch(proposalmd).then(r => r.text()).then(md => {
      setProposal(marked(md))
    })



    var acc = document.getElementsByClassName("collapse");
    var i;
    for (i = 0; i < acc.length; i++) {

      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    watchForHover();



  }, [])



  return (

    <div className="container">



      <div className="query">
        <div className="quote-box">
          <div className="quote">The palm will be won by the one who can trace the formative forces of the animal body back to the general forces that direct the life of the universe. </div>
          <div className="author">Karl Ernst von Baer</div>
        </div>

        <div className="proposal" dangerouslySetInnerHTML={{ __html: proposal }} />

        <button className="collapse"> A Question for You </button>
        <div className="panel" dangerouslySetInnerHTML={{ __html: inquiry }} />




      </div>

    </div>
  );
}


function watchForHover() {
  var hasHoverClass = false;
  var container = document.body;
  var lastTouchTime = 0;

  function enableHover() {
    // discard emulated mouseMove events coming from touch events
    if (new Date() - lastTouchTime < 500) return;
    if (hasHoverClass) return;

    container.className += ' hasHover';
    hasHoverClass = true;
  }

  function disableHover() {
    if (!hasHoverClass) return;

    container.className = container.className.replace('hasHover', '');
    hasHoverClass = false;
  }

  function updateLastTouchTime() {
    lastTouchTime = new Date();
  }

  document.addEventListener('touchstart', updateLastTouchTime, true);
  document.addEventListener('touchstart', disableHover, true);
  document.addEventListener('mousemove', enableHover, true);

  enableHover();
}


export default App;
