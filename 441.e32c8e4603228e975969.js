"use strict";(self.webpackChunkatomixwap=self.webpackChunkatomixwap||[]).push([[441],{9441:(e,s,n)=>{n.r(s),n.d(s,{SwapLinkAccept:()=>l});var t=n(5984),a=n(4050),i=n.n(a),r=n(2592);class l{constructor(e,s,n,t){this.walletConnect=s,this.algodClient=n,this.algoIndexer=t,this.ui=document.createElement("div"),this.fields={},this.signedTxTransfer,this.signedOptinCurrencyTx,this.resolveData(e)}async resolveData(e){const s=atob(e),n=JSON.parse(s);this.signedTxTransfer=t.X.base64ToSignedTx(n.signedTransferTx);const a=i().decodeSignedTransaction(this.signedTxTransfer);n.signedOptinCurrencyTx&&(this.signedOptinCurrencyTx=t.X.base64ToSignedTx(n.signedOptinCurrencyTx)),this.fields={assetId:a.txn.assetIndex,sellerAddress:i().encodeAddress(a.txn.from.publicKey),buyerAddress:i().encodeAddress(a.txn.to.publicKey),price:n.price,currency:n.currency,royalties:n.royalties,groupID:a.txn.group,firstRound:a.txn.firstRound,lastRound:a.txn.lastRound},(await this.algodClient.status().do())["last-round"]>=this.fields.lastRound?this.ui.innerHTML='<h4>Accept swap</h4>\n        <div class="alert alert-danger" role="alert">This link expired.</div>':this.fields.buyerAddress!==this.walletConnect.walletAddress?this.ui.innerHTML=`<h4>Accept swap</h4>\n        <div class="alert alert-warning" role="alert">This swap can only be accepted by the following wallet:<br><span style="word-break: break-all;">${this.fields.buyerAddress}</span></div>`:(this.ui.innerHTML="<h4>Accept swap</h4>\n        Loading...",this.swapLinkManager=new t.X(this.walletConnect,this.algodClient,this.algoIndexer),this.generateTransactions())}async generateTransactions(){try{await this.swapLinkManager.generateTransactions(this.fields)}catch(e){this.ui.innerHTML=`<h4>Accept swap</h4>\n        <div class="alert alert-danger" role="alert">${e.message}</div>`}this.displayUI()}displayUI(){const e=this.swapLinkManager.transactions,s=e.assetTransfer.assetIndex,n=(i().encodeAddress(e.assetTransfer.to.publicKey),i().encodeAddress(e.assetTransfer.from.publicKey));let t="";if(e.payment){let s,a=e.payment.amount;if("pay"===e.payment.type)a/=1e6,s="ALGO";else{let e="";360019122===this.swapLinkManager.currencyAsset.index&&(e="&#127844; "),s=`${this.swapLinkManager.currencyAsset.params["unit-name"]} ${e}(ASA ${this.swapLinkManager.currencyAsset.index})`}t=`<li>You'll send <span class="price">${a} ${s}</span><br>\n      <span class="wallet-info">TO ${n}</span></li>`}if(this.ui.innerHTML=`<h4>Accept swap</h4>\n        <div class="row">\n            <div class="col-md-6">\n              <ul>\n                ${t}\n                <li>You'll receive asset <strong><a href="https://www.nftexplorer.app/asset/${s}" target="_blank">${s}</a></strong><br><span id="assetName">(${this.swapLinkManager.asset.params.name})</span></li>\n              </ul>\n            </div>\n            <div class="col-md-6 ">\n                <img src="default.png" id="imgAssetPreview" class="img-fluid">\n            </div>\n        </div>\n        <form>\n            <div class="mb-3 form-check">\n                <input type="checkbox" class="form-check-input" id="checkAcceptRisk" required>\n                <label class="form-check-label" for="checkAcceptRisk">I accept to use this tool at my own\n                    risk</label>\n            </div>\n            \n            <button type="submit" class="btn btn-generate fw-bold" id="buttonAccept">Accept & sign</button>\n        </form>`,this.ui.querySelector("form").addEventListener("submit",this.submitAccept.bind(this)),e.royaltiesPayment){const s=this.ui.querySelector("ul"),n=document.createElement("li");let t,a=e.royaltiesPayment.amount;"pay"===e.royaltiesPayment.type?(a/=1e6,t="ALGO"):t=e.royaltiesPayment.assetIndex;const r=i().encodeAddress(e.royaltiesPayment.to.publicKey);n.innerHTML=`You'll send <span class="price">${a} ${t}</span> to asset's creator &#128154;<br>\n      <span class="wallet-info">TO ${r}</span>`,s.append(n)}(0,r.g)(s,this.ui.querySelector("#imgAssetPreview"),512)}async submitAccept(e){e.preventDefault();const s=this.ui.querySelector("#buttonAccept");s.disabled=!0,s.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\n    Waiting for signatures...',this.swapLinkManager.signAndCommitTransactions(this.signedTxTransfer,this.signedOptinCurrencyTx,(()=>{s.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\n        Sending transactions...'}),(()=>{s.hidden=!0,this.ui.innerHTML=`<h4>Swapped 🥳</h4>\n        You received asset <a href="https://www.nftexplorer.app/asset/${this.swapLinkManager.asset.index}">${this.swapLinkManager.asset.index}</a> (${this.swapLinkManager.asset.params.name}).`}),(e=>{s.hidden=!0,this.ui.innerHTML=`<h4>Accept swap</h4>\n            <div class="alert alert-danger" role="alert">Error:<br>${e}</div>`}))}}}}]);