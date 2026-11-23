import type ExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";

/**
 * Opens the indicators page from the toolbar of the requests table.
 *
 * @param this Extension API of the list report
 * @returns Promise resolved when the navigation has finished
 */
export async function onOpenIndicators(this: ExtensionAPI): Promise<void> {
	await this.getRouting().navigateToRoute("Indicators");
}
