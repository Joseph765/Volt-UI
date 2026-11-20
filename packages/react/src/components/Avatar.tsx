"use client";

import { forwardRef, useEffect, useRef, useState, type HTMLAttributes, type Ref } from "react";
import { useMergedRefs } from "../utils.js";

type AvatarOwnProps = {
	/** The person's name: the image's alt text, and the letter shown without an image. */
	name: string;
	/** The picture. Falls back to the letter if it fails to load. */
	src?: string;
};

export type AvatarProps = AvatarOwnProps & Omit<HTMLAttributes<HTMLElement>, keyof AvatarOwnProps>;

/** A round picture of a person. Shows `src` when given, otherwise the first letter of `name`. */
export const Avatar = forwardRef<HTMLElement, AvatarProps>(function Avatar({ name, src, className, ...rest }, ref) {
	const [failed, setFailed] = useState(false);
	const imageRef = useRef<HTMLImageElement>(null);
	const mergedRef = useMergedRefs<HTMLElement>(ref, imageRef as Ref<HTMLElement>);

	// A new image gets a fresh chance to load. An image that failed before hydration never fires onError, so
	// check for one that already finished without a picture.
	useEffect(() => {
		const image = imageRef.current;
		setFailed(Boolean(image && image.complete && image.naturalWidth === 0));
	}, [src]);

	const classes = className ? `m-avatar ${className}` : "m-avatar";

	if (src && !failed) {
		return <img ref={mergedRef} className={classes} src={src} alt={name} onError={() => setFailed(true)} {...rest} />;
	}

	const letter = name.trim().charAt(0).toLocaleUpperCase();
	return (
		<span ref={mergedRef} className={classes} role="img" aria-label={name} {...rest}>
			<span aria-hidden="true">{letter}</span>
		</span>
	);
});
