const SkillItem = ({ icon, name, color }) => (
    <div className='flex flex-col items-center justify-center min-w-[100px] mx-4 px-4 py-3  backdrop-blur-md border border-white/10 rounded-xl shadow '>
        <div style={{ color }}>{icon}</div>
        <p className='mt-2 text-sm font-medium'>{name}</p>
    </div>
);

export default SkillItem;