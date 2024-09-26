import React from 'react'

export default function Banner() {
    return (
        <div>
            <header className="py-5">
                <div className="container px-lg-5">
                    <div className="p-4 p-lg-5 bg-body-secondary bg-opacity-80  rounded-3 text-right">
                        <div className="m-4 m-lg-5">
                            <h1 className="display-5 fw-bold">
                                A warm welcome!
                            </h1>
                            <p className="fs-4">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Provident soluta cum fugiat nulla libero aliquam quam, ut labore laboriosam fugit aperiam ipsam corporis sit,
                                culpa ullam consectetur velit, dolorem quae?
                            </p>
                            <a
                                className="btn btn-primary btn-lg"
                                href="#!">
                                Call to action!
                            </a>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}
