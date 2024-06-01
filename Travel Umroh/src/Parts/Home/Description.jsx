import { useContext } from "react"
import { AppContext } from "../../App"

const Description = () => {
    const {mode} = useContext(AppContext)
    return (
        <div className={`container-lg mt-5 mb-5 text-start bg-${mode === 'light' ? 'lights' : mode} text-${mode === 'dark' ? 'light' : 'dark'} description`}>
            <div className="mb-5">
            <h3 className='mb-3 fs-2'>Keuntungan menggunakan Nabil Travel</h3>
            <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda expedita aliquam rem quis, voluptates officiis itaque enim! Autem laudantium perspiciatis temporibus blanditiis animi nobis, adipisci dolorum illum tempore atque delectus libero consectetur vitae. Ad optio, tenetur reiciendis illo totam nemo? Minus maiores atque ea sequi quibusdam esse? Eligendi vel, totam dicta, ipsa dolorum quas incidunt ducimus, quo enim error cupiditate? Illo numquam facere fugiat et soluta facilis odio labore magni voluptates impedit quidem veniam incidunt doloribus dolorum laboriosam dolores suscipit hic, eius optio expedita accusamus laborum? Omnis expedita totam ipsum quam rerum est hic quod, aut ducimus praesentium reiciendis.</p>
            </div>
            <div className="mb-5">
            <h3 className='mb-3 fs-2'>Apa itu umroh</h3>
            <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda expedita aliquam rem quis, voluptates officiis itaque enim! Autem laudantium perspiciatis temporibus blanditiis animi nobis, adipisci dolorum illum tempore atque delectus libero consectetur vitae. Ad optio, tenetur reiciendis illo totam nemo? Minus maiores atque ea sequi quibusdam esse? Eligendi vel, totam dicta, ipsa dolorum quas incidunt ducimus, quo enim error cupiditate? Illo numquam facere fugiat et soluta facilis odio labore magni voluptates impedit quidem veniam incidunt doloribus dolorum laboriosam dolores suscipit hic, eius optio expedita accusamus laborum? Omnis expedita totam ipsum quam rerum est hic quod, aut ducimus praesentium reiciendis.</p>
            </div>
            <div className="mb-5">
            <h3 className='mb-3 fs-2'>Bagaimana cara umroh</h3>
            <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda expedita aliquam rem quis, voluptates officiis itaque enim! Autem laudantium perspiciatis temporibus blanditiis animi nobis, adipisci dolorum illum tempore atque delectus libero consectetur vitae. Ad optio, tenetur reiciendis illo totam nemo? Minus maiores atque ea sequi quibusdam esse? Eligendi vel, totam dicta, ipsa dolorum quas incidunt ducimus, quo enim error cupiditate? Illo numquam facere fugiat et soluta facilis odio labore magni voluptates impedit quidem veniam incidunt doloribus dolorum laboriosam dolores suscipit hic, eius optio expedita accusamus laborum? Omnis expedita totam ipsum quam rerum est hic quod, aut ducimus praesentium reiciendis.</p>
            </div>
        </div>
    )
}

export default Description;