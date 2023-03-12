"use strict";(self.webpackChunkatomixwap=self.webpackChunkatomixwap||[]).push([[644],{644:(t,s,e)=>{e.r(s),e.d(s,{Claim:()=>r});var a=e(4050),n=e.n(a),l=e(9182),i=e(2592);class o{constructor(t,s){this.API_URL=l.Z.urls[l.Z.network].claimApiUrl,this.walletConnect=t,this.algodClient=s,this.claimables,this.suggestedParams,this.escrowAddress}async load(){const t=await fetch(this.API_URL+"/claim/get?recipient="+this.walletConnect.walletAddress),s=await t.json();console.log(s),this.claimables=s.claimables,this.suggestedParams=s.suggestedParams,this.escrowAddress=s.escrowAddress;for(const t of this.claimables){const s=await this.algodClient.getAssetByID(t.assetId).do();t.params=s.params}}getClaimablesUI(){let t=0,s=[];const e=document.createElement("div");let a,n,l=0;for(const o of this.claimables){0===t&&(a=document.createElement("div"),a.className="mt-4 mb-1",e.append(a),n=n=document.createElement("div"),n.className="row text-center gx-2 gy-2 mb-3",a.append(n));const r=document.createElement("div");if(r.className="col-6 col-md-3",r.innerHTML=`<div class="h-100 nft-card"><img src="default.png" class="img-fluid" id="nft-${o.assetId}"><div class="nft-card-info"><strong>${o.params.name}</strong><br>\n      <small><a href="https://www.nftexplorer.app/asset/${o.assetId}" target="_blank">${o.assetId}</a></small></div></div>`,(0,i.g)(o.assetId,r.querySelector(`#nft-${o.assetId}`),400),s.push(o.assetId),n.append(r),t++,l===this.claimables.length-1||8===t){const e=document.createElement("button");e.className="btn btn-generate",e.textContent="Claim "+(t>1?`(${t})`:""),e.dataset.assetIds=s.join(","),e.addEventListener("click",this.claim.bind(this),!1),a.append(e),t=0,s=[]}l++}return e}async claim(t){const s=t.currentTarget;try{s.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\n      Waiting for signatures...',s.disabled=!0;const e=t.currentTarget.dataset.assetIds.split(",");console.log("assetIds"),console.log(e);let a=[];for(const t of e){let s=a.find((s=>s.assetId===t));if(s)s.amount++;else{const s={assetId:t,amount:1};a.push(s)}}let l=[],i=[];for(const t of a){let s=n().makeAssetTransferTxnWithSuggestedParamsFromObject({from:this.walletConnect.walletAddress,to:this.walletConnect.walletAddress,amount:0,assetIndex:parseInt(t.assetId),suggestedParams:this.suggestedParams});t.optinTxId=s.txID(),l.push(s);let e=n().makeAssetTransferTxnWithSuggestedParamsFromObject({from:this.escrowAddress,to:this.walletConnect.walletAddress,amount:t.amount,assetIndex:parseInt(t.assetId),suggestedParams:this.suggestedParams});i.push(e)}console.log("claimList"),console.log(a);let o=l.concat(i);n().assignGroupID(o),console.log("allTxns"),console.log(o);const r=await this.walletConnect.signTransactions(o);console.log("signedTxns"),console.log(r);let c=[];for(let t=0;t<r.length;t++){const s=n().decodeSignedTransaction(r[t])?.txn.txID(),e=a.find((t=>t.optinTxId===s));console.log(s),console.log(e),e&&c.push({amount:e.amount,txn:btoa(String.fromCharCode.apply(null,r[t]))})}console.log("signedTxnsJson"),console.log(c),s.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\n      Claiming...',s.disabled=!0;const d=await fetch(this.API_URL+"/claim/claim",{method:"POST",body:JSON.stringify({signedTxns:c}),headers:{Accept:"application/json","Content-Type":"application/json"}});if(200!==d.status){const t=await d.json();throw new Error(t.error)}await d.json(),s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">\n        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>\n      </svg>\n        Claimed',s.disabled=!0}catch(t){console.error(t),alert(t.message),s.textContent="Claim",s.disabled=!1}}}class r{constructor(t,s){this.walletConnect=t,this.algodClient=s,this.ui=document.createElement("div"),this.claimApi=new o(this.walletConnect,this.algodClient),this.displayUI(),this.loadClaimables()}displayUI(){this.ui.innerHTML='\n        <h4 id="claim-title">Claim</h4>\n        <div id="claim-list">Loading...</div>\n        '}async loadClaimables(){try{await this.claimApi.load()}catch(t){return console.error(t),void(this.ui.innerHTML=`\n        <h4 id="claim-title">Claim</h4>\n        <div class="alert alert-danger" role="alert">${t.message}</div>\n        `)}const t=this.ui.querySelector("#claim-title"),s=this.ui.querySelector("#claim-list"),e=this.claimApi.claimables.length;0===e?(t.textContent="😞",s.textContent="No NFTS to claim."):(t.textContent=`${e} NFT${e>1?"s":""} to claim! 🥳`,s.textContent="",s.append(this.claimApi.getClaimablesUI()))}}}}]);