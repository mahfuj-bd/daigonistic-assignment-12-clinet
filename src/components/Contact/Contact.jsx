const Contact = () => {
    return (
      <div className="container mx-auto">
        <div>
          <h3 className="text-3xl font-bold text-center py-20">Contact Us</h3>
        </div>
        <div className="lg:flex flex-row ">
          <div className="flex-1 min-h-screen">
            <div className="">
              <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text">Message</span>
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      placeholder="message"
                      className="border-2 rounded-md"
                      required
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
           
            className="flex-1"
          >
            <img src="https://i.ibb.co/bXt8LvP/download.webp" alt="" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  