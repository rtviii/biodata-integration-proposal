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


    setTimeout(() => {

      acc[0].click();
    }, 800);


  }, [])



  return (

    <div className="container">

      <div className="query">
        <button className="collapse"> The Proposal </button>
        <div className="panel" dangerouslySetInnerHTML={{ __html: proposal }} >
        </div>
        <div className="inquiry" dangerouslySetInnerHTML={{ __html: inquiry }}>
        </div>

        <div className="subscript">

          <a name="auditory" >*</a> I realize that this might not actually be immediately useful to a professional biologist, who already has her heuristics developed and delivery pipelines figured out, or a professional data-scientist for whom another layer of scripting on top of the usual cleaning might not seem so unnatural. In fact, i'd like to hear from an audience in-between insofar as it exists. And insofar as it doesn't -- the reasons for why it can't.
</div>
        <br />
        <div
          className="subscript">
          <a name="complexity" >**</a> Likewise, i'm perfectly aware of the complexity that something like that incurs in the limit. Contra certain responses along the lines of "impossible due to cost/complexity": it seems obvious that -- again, in the limit -- any costs are justified by the appropriate demand and this infrastsructure has to materialize eventually. Complexity does not decrease of its own accord.
        </div>





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
