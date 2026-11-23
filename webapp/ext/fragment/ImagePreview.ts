import type ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import type { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
import Control from "sap/ui/core/Control";

/**
 * Formatter for the visibility of a thumbnail.
 *
 * @param mimeType Value of the MimeType property of the attachment
 * @returns true if the attachment is an image
 */
export function isImage(mimeType: unknown): boolean {
	return typeof mimeType === "string" && mimeType.toLowerCase().startsWith("image/");
}

/**
 * Shows the thumbnail grid if at least one attachment is an image, and the "no images" text otherwise.
 * It only reads data already held by the binding contexts: Context#getProperty never sends a request.
 *
 * @param this Extension API of the object page
 * @param event updateFinished event of the thumbnail grid
 */
export function onAttachmentsUpdateFinished(this: ExtensionAPI, event: ListBase$UpdateFinishedEvent): void {
	const grid = event.getSource();
	const hasImages = grid.getItems().some((item) => isImage(item.getBindingContext()?.getProperty("MimeType")));
	grid.setVisible(hasImages);
	const noImagesText = this.byId("imagePreviewNoImages");
	if (noImagesText instanceof Control) {
		noImagesText.setVisible(!hasImages);
	}
}
