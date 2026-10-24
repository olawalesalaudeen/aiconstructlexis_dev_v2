# Watermark decoding
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Message decoding, Message extraction  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats watermark decoding as recovery of an embedded code or message from watermarked text. The observable outcome is extracting the intended binary or multi-bit content, though the decoding rule varies: one description uses a trained classifier on segmented text, another computes the text likelihood under competing message hypotheses and selects the best one, and another uses a secret key plus token-pattern statistics, choosing the candidate that minimizes red list token counts.

**Variants.** Papers use several names for this behavior, including watermark decoding, message decoding, and message extraction. The main variants differ by what is recovered and at what unit: binary watermark codes versus multi-bit messages, decoding independently within each segment, or extracting a message chunk at each position. Some descriptions also frame the recovered message as provenance information, such as userID, TimeStamp, and modelID.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior. Instead, papers operationalize it through the decoding procedure itself, such as a decoder applied to text segments, likelihood comparison across message hypotheses, or candidate selection by the count of red list tokens.

**What it is taken as evidence of.** No construct is linked to this behavior, and the papers do not specify a construct that it is evidence of.

## Sources

**[Robust Multi-bit Text Watermark with LLM-based Paraphrasers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25k/xu25k.pdf)**
> The process of extracting the embedded binary watermark code from a text using a trained classifier applied to segmented text.

**[Towards Codable Watermarking for Injecting Multi-Bits Information to LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/abdc8c031aa6c6917c3b593166e5e340-Paper-Conference.pdf) (as "Message decoding")**
> The observable process of extracting an embedded message from a watermarked text by computing the likelihood of the text under different message hypotheses.

**[StealthInk: A Multi-bit and Stealthy Watermark for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25j/jiang25j.pdf) (as "Message extraction")**
> Decoding the embedded multi-bit message (e.g., userID, timestamp) from watermarked text using a secret key and statistical analysis of token patterns.
