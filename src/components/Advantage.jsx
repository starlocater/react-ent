const Advantage = () => {
    return (
      <div>
          <h1 className="mt-5 text-white text-5xl font-bold font-jersey text-center">
          About ENTertainment
          </h1>
          <div className="font-jersey text-white text-4xl text-center mt-20 mb-20">
              ENTertainment is a service that provides you the most affordable and stable game server.
              <br/>
              Our team is consisted of heavy gamers and experienced developers.
              <br/>
              So you don't have to worry about we are lack of knowledge about the game, or about the server.
              <br/>
              Just play and chill.
          </div>
          <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-y-20 gap-x-20 justify-items-center">
                  {/* Description Block */}      
                  <div className="flex space-x-10 w-full">
                      <div className="flex h-full items-center justify-center">
                          <img className="h-48 relative left-0" alt="money" src="/images/main_image_wrench.png"></img>
                      </div>
                      <div className="h-full flex flex-col justify-center">
                          <h1 className="text-cyan-300 font-jersey text-5xl"> 24/7 Stable Service </h1>
                          <div className="mt-6 font-jersey text-white text-3xl flex text-justify "> 
                              Our automation tool monitors your server status 24/7. 
                              <br/>
                              Our team of experts will fix issues that may arise.
                              <br/>
                              You can also contact us with discord directly.
                          </div>
                      </div>
                  </div>
                  {/* Description Block */}
                  {/* Description Block */}
                  <div className="flex space-x-10 w-full">
                      <div className="flex items-center justify-center">
                          <img className="h-48 relative left-0" alt="server" src="/images/main_image_money.png"></img>
                      </div>
                      <div className="h-full flex flex-col justify-center">
                          <h1 className="text-cyan-300 font-jersey text-5xl"> Cost Effective </h1>
                          <div className="mt-6 w-full font-jersey text-white text-3xl flex text-justify "> 
                              Yes, we are comparatively cheaper than the others.
                              <br/>
                              Get your own server with reasonable price.
                          </div>
                      </div>
                  </div>
                  {/* Description Block */}
                  {/* Description Block */}
                  <div className="flex space-x-10 w-full">
                      <div className="flex items-center justify-center">
                          <img className="h-48 relative left-0" alt="tbu1" src="/images/main_image_server_2.png"></img>
                      </div>
                      <div className="h-full flex flex-col justify-center">
                          <h1 className="text-cyan-300 font-jersey text-5xl"> Powerful Hardware </h1>
                          <div className="mt-6 w-full font-jersey text-white text-3xl flex text-justify "> 
                              Not only cheap, but we are also based on the most high-quality hardware.
                          </div>
                      </div>
                  </div>
                  {/* Description Block */}
                  {/* Description Block */}
                  <div className="flex space-x-10 w-full">
                      <div className="flex items-center justify-center">
                          <img className="h-48" alt="tbu2" src="/images/main_image_lightning.png"></img>
                      </div>
                      <div className="h-full flex flex-col justify-center">
                          <h1 className="text-cyan-300 font-jersey text-5xl"> Low Latency </h1>
                          <div className="mt-6 w-full font-jersey text-white text-3xl flex text-justify "> 
                              With optimized network and powerful hardware,
                              <br/>
                              we guarantee low latency.
                          </div>
                      </div>
                  </div>
                  {/* Description Block */}
              </div>
          </div>
      </div>
    )
  }
  export default Advantage