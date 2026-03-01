import { InputText, Template } from '@/components'



export default function FormularioPage() {
    return (
        <Template>
            <section className='flex flex-col items-center justify-center my-5'>
                <h1 className='mt-3 mb-10 text-3xl font-extrabold tracking-light text-slate-900'>New Image</h1>
                <h5></h5>
                <form>
                    <div className='grid grid-cols-1'>
                        <label className='block text-sm font-medium leading-6 text-gray-600'>Name * : </label>
                        <InputText placeholder="type the image's name"/>
                    </div>
                </form>
            </section>
        </Template>
    )
}