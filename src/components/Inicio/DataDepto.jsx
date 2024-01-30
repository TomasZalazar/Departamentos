const ComponentName = () => {
    return(
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <div className="card">
            <img src="../CentralAv/frente.jpg" alt="" />
            <div>
                <h2>Central Av Apart</h2>
                <p>
                    Descubra el encanto moderno de Central Av. Apart: un oasis contemporáneo en el corazón de la ciudad. Sumérjase en la elegancia urbana y disfrute de comodidades excepcionales en un entorno vibrante y accesible. ¡Bienvenido a Central Av. Apart!
                </p>
                <button>Ir a Central Av</button>
            </div>
        </div>
        <div className="card">
            <img src="../SanNicolas/frenteSanNicolas.jpg" alt="" />
            <div>
                <h2>San Nicolas Apart</h2>
                <p>
                Explore la serenidad moderna de San Nicolás Apart: un refugio tranquilo en medio del bullicio de la ciudad. Experimente la elegancia contemporánea y disfrute de la tranquilidad en un espacio que lo invita a relajarse y rejuvenecer. ¡Bienvenido a San Nicolás Apart!
                </p>
                <button>Ir a San Nicolas</button>
            </div>
        </div>
    </div>
    )
}

export default ComponentName