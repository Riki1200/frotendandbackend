import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
export const Add = function () {
    const [loading, setLoading] = useState(false);

    let dateFormat = new Date()
        .toLocaleDateString()
        .split("/")
        .reverse()
        .toString()
        .replace(",", "-")
        .replace(",", "-");
    let formatear = new Intl.DateTimeFormat("en-US");

    const handlePrevent = function (ev) {

        ev.preventDefault();

        setLoading(!loading);
        ev.target.reset();
        console.log(loading);
    };

    const HandleChange = function (evt) {
        let exp = /(\w[\Da-z\DA-z]\s\w+\D)/g;
        let { name, value } = evt.target;
        let data = {};

        switch (name) {
            case "name":
                if (exp.test(value)) {
                    data.name = value;
                    setLoading((n) => !n);
                }
                break;
            case "history":
                data.history = value;
                break;
            case "age":
                data.age = value;
                break;
            case "month":
                data.month = value;
                break;
            case "day":
                data.day = value;
                break;
            default:
                break;
        }

        console.info(data);
    };

    return (
        <>
            <Helmet>
                <title>Añadir historia | Add R</title>
                <meta name="author" content="RomeoDev" />
                <meta
                    name="description"
                    content="Añadir usuarios para llenar las historia y verificar si la historia es hermosa o  una mierda"
                />
                <meta
                    name="keywords"
                    content="ReactJS, SQLite, NodeJS, CRUD, Google Chrome"
                />
            </Helmet>
            <section className="section_add--content">
                <form onSubmit={handlePrevent}>
                    <div className="form_fields">
                        <label>
                            Nombre del personaje
              <input
                                name="name"
                                type="text"
                                onChange={HandleChange}
                                placeholder="...?"
                            />
                        </label>
                    </div>
                    <div className="form_fields">
                        Fecha <br />
                        <label>
                            Año
              <input type="text" name="age" onChange={HandleChange} /> / Mes{" "}
                            <select id="month" name="month" value={''} onChange={HandleChange}>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>{" "}
              / Dia <input type="text" name="day" onChange={HandleChange} />
                        </label>
                    </div>
                    <div className="form_fields">
                        <label>
                            History
              <textarea
                                name="history"
                                placeholder="History..."
                                onChange={HandleChange}
                                autoComplete="false"
                            ></textarea>
                        </label>
                    </div>
                    <div className="form_fields">
                        <label>
                            ImageLink
                            <input type='url' name='image_url' />
                        </label>
                    </div>
                    <div className="form_fields">
                        <input type="submit" value="Add" />
                    </div>
                </form>
            </section>
        </>
    );
};
