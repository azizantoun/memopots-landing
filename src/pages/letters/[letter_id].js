import Link from 'next/link'
import dynamic from 'next/dynamic';
const FileViewer = dynamic(() => import('react-file-viewer'), {
    ssr: true
});

function Letter() {
    return (
        <div>
            <FileViewer fileType="pdf" filePath="/03012022.pdf" />
        </div>
    )
}

export default Letter