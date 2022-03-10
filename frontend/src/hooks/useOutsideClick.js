import { useEffect, useState } from 'react';

export default function useOutsideClick(ref) {
	const [isClicked, setIsClicked] = useState([]);
	useEffect(() => {
		function handleClickOutside(event) {
			const clicked = ref.current && !ref.current.contains(event.target);
			setIsClicked([clicked, event.target]);
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
	return isClicked;
}
