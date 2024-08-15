

const EmailSub = () => {
  return (
    <div className="py-8">
        <div className="container">
            <div className="px-10">
                <div className="p-8 flex flex-col items-center justify-center text-center gap-y-4 py-10 px-5 rounded-lg">
                    <h5 className="text-2xl font-semibold text-primary-900">Subscribe to our Newsletter</h5>
                    <p className="font-alvenir text-dark-400">
                        Stay up to date with our latest upgrades  
                    </p>
                    <div className="flex items-center justify-center w-1/2">
                        <input 
                            type="email" 
                            name="email_sub" 
                            id="emailSub" 
                            placeholder="Type your email address here.."
                            className="p-5 rounded-s-lg border border-light-500 w-full"
                        />
                        <button className="btn btn-primary-500 py-5 px-8 rounded-e-lg">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmailSub
