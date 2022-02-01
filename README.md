# Additional Banner and Footer Plugin

This plugin very simply allows you to add an additional banner and a Footer to Mattermost. These are configured similar to the current `Announcement Banner` that exists within Mattermost.

## Installation

You can download the latest release from [here]() and upload it to your server via System Console > Plugin Management. You must first have `EnableUploads` set to true within your `config.json`.

```json
"PluginSettings": {
    "EnableUploads": false
    ...
}
```

## Usage
Within your System Console you can enable / disable the footer and header under Integrations > Additional Banner.

### Colors
Text colors must be one word or hex values

ex: `#000000` or `darkblue`

Using `dark blue` as a color will not work.

### Text
The text can be formatted with markdown.

ex: `**Make sure** to follow the compliance [here](www.thecompliance.com)`

## Example

![Screen Shot 2022-02-01 at 2 33 35 PM](https://user-images.githubusercontent.com/46071821/152039400-905f0db4-7abc-4426-aae8-4add3c08b869.png)


