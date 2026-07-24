export default async function DetailMachine ({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params;

    return (
        <div className="bg-yelloAccent">
            <h1> machine: {slug}</h1>
        </div>
    )
}