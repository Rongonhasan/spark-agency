import building from '../../../assets/Group 19.jpg'

const OverOnes = () => {
    return (
        <div>
            <div className="h-96 mt-2">
                 <h1 className="font-nobile text-[150px] font-bold leading-[391.22px] text-center  decoration-skip-ink-none">OVER ONS</h1>
            </div>
            <div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-8">
     
  <div className="md:w-1/2">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">
      Wij zijn gespecialiseerd in Dak reparaties, -renovaties en -onderhoud.
    </h2>
   
    <p className="text-gray-600 leading-relaxed mb-4">
      De specialisaties zijn o.a. het leveren en aanbrengen van Bitumen, Epdm en pannen daken. Maar ook het vernieuwen van lood en zink. Goed om te weten; Het materiaal dat wij gebruiken behoort tot de A klasse producten, dit zorgt voor een perfect eindresultaat. Het doel is u zo snel en goed mogelijk te helpen. Wij leggen de lat hoog en streven naar het beste eindresultaat.
    </p>
    <p className="text-gray-600 leading-relaxed">
      Hiervoor hebben wij uw hulp nodig; transparantie, goede communicatie en duidelijke afspraken. Heeft u vragen of wilt u meer informatie? Wij staan klaar om u verder te helpen. Dakonderhoud GMK uw specialist voor alle klussen in en rondom uw huis.
    </p>
  </div>

 
  <div className="md:w-1/2">
    <img
      src={building}
      alt="Dakonderhoud GMK"
      className="rounded-lg shadow-md w-full h-auto object-cover"
    />
  </div>
</div>

            </div>
        </div>
    );
};

export default OverOnes;