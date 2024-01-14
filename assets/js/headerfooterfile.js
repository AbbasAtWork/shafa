console.log('Script loaded.');
class SpecialHeader extends HTMLElement {
    connectedCallBack() {
        console.log('Script loaded again.');
        this.innerHTML = `
        <div class="scandinavian-desktop">
        <div class="share-it">
          <div class="position-relative" style="z-index: 9;">
            <div class="position-fixed top-0 start-0 translate-middle-y p-0" style="margin-top: 211px; background:#4267B2;">
              <a onclick="location.href='http://www.facebook.com/sharer/sharer.php?s=100&p[url]=https://www.shafa.se/&p[title]=&p[summary]=';" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Share">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-facebook display-6 p-2 text-white" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
            </div>
            <div class="position-fixed top-0 start-0 translate-middle-y p-0" style=" margin:267px 0px 0px 0px; background:#55ACEE;">
              <a onclick="location.href='https://twitter.com/intent/tweet?url=https://www.shafa.se/';" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Share">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-twitter display-6 p-2 display-6 p-2 text-white" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
            </div>
            <div class="position-fixed top-0 start-0 translate-middle-y p-0" style=" margin:323px 0px 0px 0px; background:#7D7D7D;">
              <a href="mailto:info@shafa.se" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-envelope display-6 p-2 display-6 p-2 text-white" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
              </a>
            </div>
            <div class="position-fixed top-0 start-0 translate-middle-y p-0" style=" margin:379px 0px 0px 0px;">
              <a onclick="return !window.open(this.href, 'Share on Pinterest', 'width=640, height=536')" href="http://pinterest.com/pin/create/button/?url=https://www.shafa.se/&media=https://www.shafa.se/&description=Till min Privatmottagning kan du få tid inom några dagar. Läs mer under Våra tjänster eller ring oss för mer information" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Share">
              <svg style=" background:#CB2027;" xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-pinterest p-2 display-6 text-white" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
              </svg>
              </a>
            </div>
            <div class="position-fixed top-0 start-0 translate-middle-y p-0" style=" margin:435px 0px 0px 0px; background:#95D03A;">
              <a data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Share" class="onShareshow">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-share-fill p-2 display-6 text-white display-6 p-2" viewBox="0 0 16 16" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
  

        <div class="controller">
          <div class="position-fixed top-0 start-0 translate-middle-y p-0" style=" margin:482px 0px 0px 0px; background:#CCCCCC; z-index: 12;">
            <a class="onHideshareit">
              <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" class="bi bi-chevron-double-left p-2 display-6 text-white display-6 p-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </a>
          </div>
          <div class="position-fixed top-0 start-0 translate-middle-y p-0" style=" margin:482px 0px 0px 0px; background:#CCCCCC; z-index: 12;">
            <a class="onShowhareit">
              <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" class="bi bi-chevron-double-right p-2 display-6 text-white display-6" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

  

      <div class="scandinavian-mobile">
          <div class="position-fixed bottom-0 animated fadeIn share-it-mobile" style="z-index:99; width: 100%;">
            <div class="row">
              <div class="col-2 p-0">
                <a onclick="location.href='http://www.facebook.com/sharer/sharer.php?s=100&p[url]=https://www.shafa.se/&p[title]=&p[summary]=';">
                  <div class="d-grid text-center" role="group" aria-label="group" style=" background:#4267B2;">
                    <div class="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-facebook p-3 display-6 text-white" viewBox="0 0 16 16" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Share">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-2 p-0">
                <a onclick="location.href='https://twitter.com/intent/tweet?url=https://www.shafa.se/';">
                  <div class="d-grid text-center" role="group" aria-label="group" style=" background:#55ACEE;">
                      <div class="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-twitter p-3 display-6 text-white" viewBox="0 0 16 16" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Share">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                      </div>
                  </div>
                </a>
              </div>
              <div class="col-2 p-0">
                <a href="mailto:info@shafa.se">
                  <div class="d-grid text-center" role="group" aria-label="group" style=" background:#7D7D7D;">
                      <div class="text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-envelope p-3 display-6 text-white" viewBox="0 0 16 16" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Share">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                          </svg>
                      </div>
                  </div>
                </a>
              </div>
              <div class="col-2 p-0">
                <a onclick="return !window.open(this.href, 'Share on Pinterest', 'width=640, height=536')" href="http://pinterest.com/pin/create/button/?url=https://www.shafa.se/&media=https://www.shafa.se/&description=Till min Privatmottagning kan du få tid inom några dagar. Läs mer under Våra tjänster eller ring oss för mer information">
                  <div class="d-grid text-center" role="group" aria-label="group" style=" background:#CB2027;">
                    <div class="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-pinterest p-3 display-6 text-white" viewBox="0 0 16 16" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Share">
                        <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-4 p-0">
                <a data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Share" class="onShareshow">
                  <div class="d-grid text-center" role="group" aria-label="group" style=" background:#95D03A;">
                      <div class="text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-share-fill p-3 display-6 text-white" viewBox="0 0 16 16" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                          </svg>
                      </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
      </div>

      <div class="offcanvas offcanvas-bottom" data-bs-backdrop="static" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header bg-dark float-end">
            <p class="text-secondary text-center">
              <small>
                
              </small>
            </p>
            <a data-bs-dismiss="offcanvas" aria-label="Close" class="onCloseshareit">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x-circle-fill text-white" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
              </svg>
            </a>
        </div>
        <div class="offcanvas-body small bg-dark p-4">
          <div class="row row-cols-2">
            <div class="col-lg-2 d-grid p-1">
              <a href="https://www.facebook.com/sharer.php?t=Scandinavian%20Heart%20Care%20-%20Kardiolog&u=https%3A%2F%2Fwww.shafa.se%2F" class="btn btn-primary btn-md rounded-0 border border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                Facebook
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fintent%2Ftweet%3Ftext%3DScandinavian%2520Heart%2520Care%2520-%2520Kardiolog%26url%3Dhttps%253A%252F%252Fwww.shafa.se%252F" class="btn btn-primary btn-primary-twitter btn-md rounded-0 border border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
                Twitter
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://www.pinterest.ph/pin/create/button/?description=Scandinavian%20Heart%20Care%20-%20Kardiolog&media=&url=https%3A%2F%2Fwww.shafa.se%2F" class="btn btn-danger btn-md rounded-0 border border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
                </svg> 
                Pinterest
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="mailto:info@shafa.se" class="btn btn-secondary btn-md rounded-0 border border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
                email
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://wa.me/" class="btn btn-secondary btn-md rounded-0 border border-0" style="background: #25D366;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                WhatsApp
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://wordpress.com/log-in?redirect_to=https%3A%2F%2Fwordpress.com%2Fwp-admin%2Fpress-this.php%3Fu%3Dhttps%253A%252F%252Fwww.shafa.se%252F%26t%3DScandinavian%2520Heart%2520Care%2520-%2520Kardiolog%26s%3DScandinavian%2520Heart%2520Care%2520-%2520Kardiolog%26i%3D" class="btn btn-secondary btn-md rounded-0 border border-0" style="background: #207196;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wordpress" viewBox="0 0 16 16">
                  <path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218.02 0 .039.002.058.003l.031.003A6.838 6.838 0 0 0 8 1.137 6.855 6.855 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.864 6.864 0 0 0 3.868 6.176L1.73 5.206A6.837 6.837 0 0 0 1.137 8z"/>
                  <path d="M6.061 14.583 8.121 8.6l2.109 5.78c.014.033.03.064.049.094a6.854 6.854 0 0 1-4.218.109zm7.96-9.876c.03.219.047.453.047.706 0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z"/>
                  <path fill-rule="evenodd" d="M0 8c0-4.411 3.589-8 8-8 4.41 0 8 3.589 8 8s-3.59 8-8 8c-4.411 0-8-3.589-8-8zm.367 0c0 4.209 3.424 7.633 7.633 7.633 4.208 0 7.632-3.424 7.632-7.633C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8z"/>
                </svg>
                WordPress
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://web.skype.com/share?url=https%3A%2F%2Fwww.shafa.se%2F&text=Scandinavian%20Heart%20Care%20-%20Kardiolog" class="btn btn-secondary btn-md rounded-0 border border-0" style="background: #01B0EC;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skype" viewBox="0 0 16 16">
                  <path d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z"/>
                </svg>
                Skype
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Ftitle%3DScandinavian%2520Heart%2520Care%2520-%2520Kardiolog%26url%3Dhttps%253A%252F%252Fwww.shafa.se%252F" class="btn btn-secondary btn-md rounded-0 border border-0" style="background: #0A66C2;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
                LinkedIn
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://www.facebook.com/dialog/send?link=https%3A%2F%2Fwww.shafa.se%2F&app_id=291494419107518&redirect_uri=https%3A%2F%2Fwww.sharethis.com" class="btn btn-secondary btn-md rounded-0 border border-0" style="background: rgb(59,115,255); background: linear-gradient(0deg, rgba(59,115,255,1) 0%, rgba(233,72,160,1) 100%);">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-messenger" viewBox="0 0 16 16">
                  <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
                </svg>
                Messenger
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="http://service.weibo.com/share/share.php?title=Scandinavian%20Heart%20Care%20-%20Kardiolog&url=https%3A%2F%2Fwww.shafa.se%2F&pic=" class="btn btn-secondary btn-md rounded-0 border border-0" style="background: #DF2029;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sina-weibo" viewBox="0 0 16 16">
                  <path d="M10.878 1.093a4.23 4.23 0 0 1 4.031 1.305 4.225 4.225 0 0 1 .886 4.14v.001a.612.612 0 0 1-1.166-.377 3.01 3.01 0 0 0-3.495-3.873.611.611 0 1 1-.256-1.196ZM3.753 9.465c.548-1.11 1.972-1.74 3.233-1.411 1.304.338 1.971 1.568 1.437 2.764-.541 1.221-2.095 1.875-3.416 1.449-1.271-.411-1.812-1.67-1.254-2.802Zm2.658.567c.16.066.365-.009.458-.168.088-.16.03-.34-.129-.397-.156-.062-.353.013-.446.168-.09.154-.041.333.117.397Zm-1.607 1.314c.413.188.963.009 1.219-.4.252-.413.12-.883-.296-1.062-.41-.172-.94.005-1.194.402-.256.4-.135.874.271 1.06Z"/>
                  <path d="m12.014 7.238.005.001c.919.285 1.941.974 1.939 2.188 0 2.007-2.895 4.535-7.246 4.535C3.393 13.962 0 12.352 0 9.708c0-1.385.876-2.985 2.384-4.493C4.4 3.199 6.751 2.28 7.634 3.165c.39.392.427 1.065.177 1.87-.132.405.38.182.38.182 1.63-.682 3.051-.722 3.57.02.278.397.252.951-.004 1.594-.116.293.035.34.257.407Zm-10.4 3.101c.172 1.738 2.46 2.936 5.109 2.674 2.647-.26 4.656-1.883 4.482-3.623-.17-1.738-2.458-2.937-5.107-2.674-2.647.263-4.656 1.883-4.484 3.623Zm11.681-6.484a2.056 2.056 0 0 0-1.962-.634.526.526 0 1 0 .219 1.031 1.008 1.008 0 0 1 1.17 1.296.528.528 0 0 0 1.005.325 2.062 2.062 0 0 0-.432-2.018Z"/>
                </svg>
                Weibo
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://api.qrserver.com/v1/create-qr-code/?size=154x154&data=https%3A%2F%2Fwww.shafa.se%2F" class="btn btn-secondary btn-md rounded-0 border border-0" style="background: #2FC300;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wechat" viewBox="0 0 16 16">
                  <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z"/>
                  <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z"/>
                </svg>
                Wechat
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://t.me/share/url?url=https%3A%2F%2Fwww.shafa.se%2F&text=Scandinavian%20Heart%20Care%20-%20Kardiolog&to=" class="btn btn-secondary btn-md rounded-0 border border-0" style="background: rgb(41,170,236); background: linear-gradient(0deg, rgba(41,170,236,1) 0%, rgba(34,159,218,1) 100%);">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                </svg>
                Telegram
              </a>
            </div>
          </div>
          <div class="row row-cols-2 justify-content-md-center">
            <div class="col-lg-2 d-grid p-1">
              <a onclick="window.print()" class="btn btn-secondary btn-md rounded-0 border border-0" style=" background: #222222;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                  <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                </svg>
                Print
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://lineit.line.me/share/ui?url=https%3A%2F%2Fwww.shafa.se%2F&text=Scandinavian%20Heart%20Care%20-%20Kardiolog" class="btn btn-secondary btn-md rounded-0 border border-0" style=" background: #00C300;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-line" viewBox="0 0 16 16">
                <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"/>
              </svg>
                Line
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://www.reddit.com/submit?title=Scandinavian%20Heart%20Care%20-%20Kardiolog&url=https%3A%2F%2Fwww.shafa.se%2F" class="btn btn-secondary btn-md rounded-0 border border-0" style=" background: #FF4500;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reddit" viewBox="0 0 16 16">
                  <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"/>
                </svg>
                Reddit
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://trello.com/add-card?mode=popup&url=https%3A%2F%2Fwww.shafa.se%2F&desc=Scandinavian%20Heart%20Care%20-%20Kardiolog" class="btn btn-secondary btn-md rounded-0 border border-0" style=" background: #0D63DE;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trello" viewBox="0 0 16 16">
                  <path d="M14.1 0H1.903C.852 0 .002.85 0 1.9v12.19A1.902 1.902 0 0 0 1.902 16h12.199A1.902 1.902 0 0 0 16 14.09V1.9A1.902 1.902 0 0 0 14.1 0ZM7 11.367a.636.636 0 0 1-.64.633H3.593a.633.633 0 0 1-.63-.633V3.583c0-.348.281-.631.63-.633h2.765c.35.002.632.284.633.633L7 11.367Zm6.052-3.5a.633.633 0 0 1-.64.633h-2.78A.636.636 0 0 1 9 7.867V3.583a.636.636 0 0 1 .633-.633h2.778c.35.002.631.285.631.633l.01 4.284Z"/>
                </svg>
                Trello
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://vk.com/share.php?url=https%3A%2F%2Fwww.shafa.se%2F" class="btn btn-secondary btn-md rounded-0 border border-0" style=" background:#0078FF;">
                <i class="icofont-vk"></i>
                Vk
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="http://widget.renren.com/dialog/share?resourceUrl=https%3A%2F%2Fwww.shafa.se%2F&srcUrl=https%3A%2F%2Fwww.shafa.se%2F&title=Scandinavian%20Heart%20Care%20-%20Kardiolog&description=Scandinavian%20Heart%20Care%20-%20Kardiolog" class="btn btn-secondary btn-md rounded-0 border border-0" style=" background:#005DA8;">
                <i class="icofont-renren"></i>
                Renren
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://www.xing.com/app/user?op=share&title=Scandinavian%20Heart%20Care%20-%20Kardiolog&url=https%3A%2F%2Fwww.shafa.se%2F" class="btn btn-secondary btn-md rounded-0 border border-0" style=" background:#1A7576;">
                <i class="icofont-xing"></i>
                Xing
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://www.livejournal.com/login.bml?returnto=https%3A%2F%2Fwww.livejournal.com%2Fupdate.bml%3Fevent%3Dhttps%253A%252F%252Fwww.shafa.se%252F%26subject%3DScandinavian%2520Heart%2520Care%2520-%2520Kardiolog&subject=Scandinavian%20Heart%20Care%20-%20Kardiolog&event=https%3A%2F%2Fwww.shafa.se%2F" class="btn btn-secondary btn-md rounded-0 border border-0" style=" background:#00AAE3;">
                <i class="icofont-livejournal"></i>
                Livejournal
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://connect.ok.ru/dk?st.cmd=OAuth2Login&st.layout=w&st.redirect=%252Fdk%253Fcmd%253DWidgetSharePreview%2526amp%253Bst.cmd%253DWidgetSharePreview%2526amp%253Bst.shareUrl%253Dhttps%25253A%25252F%25252Fwww.shafa.se%25252F&st._wt=1&st.client_id=-1" class="btn btn-secondary btn-md rounded-0 border border-0" style=" background:#D7772D;">
                <i class="icofont-odnoklassniki"></i>
                Odnoklassniki
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://digg.com/" class="btn btn-secondary btn-md rounded-0 border border-0" style=" background:#262626;">
                <i class="icofont-digg"></i>
                Digg
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fwww.blogger.com%2Fblog-this.g%3Fn%3DScandinavian%2BHeart%2BCare%2B-%2BKardiolog%26t%26u%3Dhttps%3A%2F%2Fwww.shafa.se%2F&followup=https%3A%2F%2Fwww.blogger.com%2Fblog-this.g%3Fn%3DScandinavian%2BHeart%2BCare%2B-%2BKardiolog%26t%26u%3Dhttps%3A%2F%2Fwww.shafa.se%2F&passive=1209600&ifkv=AeDOFXh-pAZiG9GyvJIXmuvVr243nF4UUokpgArzn4gafTFBTMlTOhUQHes5a6CSjkBsSyMuR_MV&flowName=GlifWebSignIn&flowEntry=ServiceLogin" class="btn btn-secondary btn-md rounded-0 border border-0" style=" background:#FF8000;">
                <i class="icofont-blogger"></i>
                Blogger
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://www.evernote.com/Login.action?targetUrl=%2Fclip.action%3Ftitle%3DScandinavian%2520Heart%2520Care%2520-%2520Kardiolog%26url%3Dhttps%253A%252F%252Fwww.shafa.se%252F" class="btn btn-secondary btn-md rounded-0 border border-0" style=" background:#5BA525;">
                <i class="icofont-evernote"></i>
                Evernote
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="#" class="btn btn-secondary btn-md rounded-0 border border-0" style=" background:#7B519D;">
                <i class="icofont-viber"></i>
                Viber
              </a>
            </div>
            <div class="col-lg-2 d-grid p-1">
              <a href="https://trello.com/add-card?mode=popup&url=https%3A%2F%2Fwww.shafa.se%2F&desc=Scandinavian%20Heart%20Care%20-%20Kardiolog" class="btn btn-secondary btn-md rounded-0 border border-0" style=" background:#0080FE;">
                <i class="icofont-trello"></i>
                Trello
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="position-sticky float-top-panel">
        <div class="top-nav">
            <div class="container">
              <div class="row">
                <div class="col-lg-9">
                    <div class="scandinavian-desktop">
                      <p>
                        <a class="text-white text-decoration-none fw-normal" href="mailto:info@shafa.se" target="_blank">
                            <i class="bi bi-envelope-fill"></i>  
                            <small>
                              info@shafa.se
                            </small>
                        </a>
                        <a class="text-white text-decoration-none ms-4 fw-normal" href="tel:+46031-7960-140" target="_self">
                            <i class="bi bi-telephone-fill"></i>  
                            <small>
                              +46 031-7960-140
                            </small>
                        </a>
                      </p>
                    </div>
                    <div class="scandinavian-mobile">
                        <p class="text-center">
                          <a class="text-white text-decoration-none fw-normal" href="mailto:info@shafa.se" target="_blank" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="info@shafa.se">
                              <i class="bi bi-envelope-fill"></i>
                              info@shafa.se
                          </a>
                          <a class="text-white text-decoration-none ms-2 fw-normal" href="tel:+46031-7960-140" target="_self">
                              <i class="bi bi-telephone-fill"></i>  
                              <small>
                                +46031-7960-140
                              </small>
                          </a>
                        </p>
                    </div>
                </div>
              
                <div class="col-lg-3">

                </div>
            
              </div>
            </div>
        </div>
        <div class="personalize-news-section">
          <div class="container">
            <div class="row">
                <div class="col-6 mb-3 mt-2">
                  <h6 class="text-white">News</h6>
                </div>
                <div class="col-6 mb-3">
                  <a class="float-end onClosepersonalnews">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-up-right-circle-fill text-white" viewBox="0 0 16 16">
                      <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"/>
                    </svg>
                  </a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 news-blocks-bg p-0 shadow-sm mt-1 mb-1">
                  <img class="img-fluid float-start" src="assets/images/top-headline.png" alt="">
                  <small class="text-white float-start mt-4 ms-2 fw-bold">Top Headline</small>
                  <a class="float-end mt-4 ms-3 me-3 onAddpersonalizenews">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-plus-circle text-white" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                  </a>
                  <a class="float-end mt-4 ms-3 me-3 onUncheck">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-plus-circle-fill text-white" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg>
                  </a>
                </div>
                <div class="col-lg-3 news-blocks-bg p-0 shadow-sm mt-1 mb-1">
                  <img class="img-fluid float-start" src="assets/images/corona-virus.png" alt="">
                  <small class="text-white float-start mt-4 ms-2 fw-bold">Coronavirus</small>
                  <a class="float-end mt-4 ms-3 me-3" href="#AddNewsPersonalize">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-plus-circle text-white" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                  </a>
                </div>
                <div class="col-lg-3 news-blocks-bg p-0 shadow-sm mt-1 mb-1">
                  <img class="img-fluid float-start" src="assets/images/life-style.png" alt="">
                  <small class="text-white float-start mt-4 ms-2 fw-bold">Life Style</small>
                  <a class="float-end mt-4 ms-3 me-3" href="#AddNewsPersonalize">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-plus-circle text-white" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                  </a>
                </div>
                <div class="col-lg-3 news-blocks-bg p-0 shadow-sm mt-1 mb-1">
                  <img class="img-fluid float-start" src="assets/images/tech-science.png" alt="">
                  <small class="text-white float-start mt-4 ms-2 fw-bold">Tech & Science</small>
                  <a class="float-end mt-4 ms-3 me-3" href="#AddNewsPersonalize">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-plus-circle text-white" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                  </a>
                </div>
            </div>
  
            <div class="col-lg-12 text-center mt-4">
              <a href="news.html" class="text-white text-uppercase text-decoration-none btn btn-secondary rounded-0 btn-sm">
                <small>
                  Go to news
                </small>
              </a>
            </div>
  
          </div>
        </div>

                  <div class="scandinavian-menu shadow">

                  <div class="container">
                    <div class="row">
                      <div class="col-5">
                        <a href="index.html">
                          <img class="img-fluid padding-logo" src="assets/images/logo.png" alt="" title="logo" width="140" />
                        </a>
                      </div>
  
                      <div class="col-7">
                        <div class="scandinavian-desktop">
                          <ul class="nav justify-content-end">
                            <li class="nav-item">
                              <a class="nav-link active text-dark fw-bold" href="index.html">
                                <small>
                                  HEM
                                </small>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link text-dark fw-bold" href="staff.html">
                                <small>
                                  PERSONAL
                                </small>
                              </a>
                            </li>
                            <li class="nav-item dropdown">
                              <a class="nav-link text-dark fw-bold" href="#">
                                <small>
                                  TIDSBOKNING (MAKE APPOINTMENTS)
                                </small>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-dark rounded-0 p-3" style="width: 261px;">
                                <li class="mt-2">
                                  <a class="text-decoration-none text-white" href="https://patient.nu/portal/public/calendar/098ec116-72ce-11eb-b72c-c1de16d3e1eb">
                                    <small>
                                      Boka tid (enbart privata patienter)
                                    </small>
                                  </a>
                                </li>
                                <li class="mt-2">
                                  <a class="text-decoration-none text-white" href="https://patient.nu/portal/public/calendar/098ec116-72ce-11eb-b72c-c1de16d3e1eb">
                                    <small>
                                      Make appointment (only private patients)
                                    </small>
                                  </a>
                                </li>
                                <li class="mt-2">
                                  <a class="text-decoration-none text-white" href="assets/uploads/Halsodekleration.pdf">
                                    <small>
                                      Hälsodekleration
                                    </small>
                                  </a>
                                </li>
                                <li class="mt-2">
                                  <a class="text-decoration-none text-white" href="contact-us.html">
                                    <small>
                                      Kontakta oss
                                    </small>
                                  </a>
                                </li>
                                <li class="mt-2">
                                  <a class="text-decoration-none text-white" href="about.html">
                                    <small>
                                      Om oss
                                    </small>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link text-dark fw-bold" href="priser.html">
                                <small>
                                  PRISER
                                </small>
                              </a>
                            </li>
                        </div>
                        <div class="scandinavian-mobile"> 
                          <nav class="navbar float-end mt-0 rounded-0 p-0">
                            <a class="navbar-toggler rounded-0 border-0">
                                <a class="onMenumobile">
                                  <i class="bi bi-menu-up display-5 display-list text-dark"></i>
                                </a>
                                <a class="onMenuclose">
                                  <i class="bi bi-menu-down display-5 display-close text-dark"></i>
                                </a>
                            </a>
                          </nav>
                        </div>
                      </div>
  
                    </div>
                  </div>
  

        </div>
  

        <div class="scandinavian-mobile">
              <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-1">
                  <div class="mt-2">
                    <div>
                      <a class="dropdown-item text-white p-2" href="index.html">
                        <small>
                          HEM
                        </small>
                      </a>
                    </div>
                    <div>
                      <a class="dropdown-item text-white p-2" href="staff.html">
                        <small>
                          PERSONAL
                        </small>
                      </a>
                    </div>
                    <div>
                      <a class="dropdown-item text-white p-2" href="priser.html">
                        <small>
                          PRISER
                        </small>
                      </a>
                    </div>
                    <div>
                      <a class="dropdown-item text-white p-2" href="">
                        <small>
                          TIDSBOKNING (MAKE APPOINTMENTS)
                        </small>
                      </a>
                      <div class="ms-3">
                        <div>
                          <a class="dropdown-item text-white p-2" href="https://patient.nu/portal/public/calendar/098ec116-72ce-11eb-b72c-c1de16d3e1eb">
                            <small>
                              Boka tid (enbart privata patienter)
                            </small>
                          </a>
                        </div>
                        <li class="mt-2">
                          <a class="text-decoration-none text-white" href="https://patient.nu/portal/public/calendar/098ec116-72ce-11eb-b72c-c1de16d3e1eb">
                            <small>
                              Make appointment (only private patients)
                            </small>
                          </a>
                        </li>
                        <div>
                          <a class="dropdown-item text-white p-2" href="assets/uploads/Halsodekleration.pdf">
                            <small>
                              Hälsodekleration
                            </small>
                          </a>
                        </div>
                        <div>
                          <a class="dropdown-item text-white p-2" href="contact-us.html">
                            <small>
                              Kontakta oss
                            </small>
                          </a>
                        </div>
                        <div>
                          <a class="dropdown-item text-white p-2" href="about.html" target="_self">
                            <small>
                              Om oss
                            </small>
                          </a>
                        </div>
                      </div>
                    </div>
  
                  </div>
                </div>
              </div>
        </div>
      </div>
        `;
    }
    }
