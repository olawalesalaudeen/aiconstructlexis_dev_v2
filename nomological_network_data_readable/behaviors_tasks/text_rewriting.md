# Text rewriting
**Type:** Behavior  
**Referenced in:** 10 papers  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats text rewriting as an LLM taking an existing text and producing a modified version in response to instructions such as "polish," "rewrite," "refine," or "rephrase." Most definitions describe success as changing wording, phrasing, structure, or style while preserving the original meaning or remaining semantically relevant to the input. A smaller line of work adds stricter requirements, asking the model to change one aspect, such as topic, style, or factual content, while preserving others, and some watermark papers frame the same behavior as modifying text to remove a watermark while preserving meaning.

**Variants.** Papers study several variants of this behavior. Common variants include paraphrasing, rephrasing, synonym substitution, and other structural or stylistic edits that preserve meaning, while another recurring setup rewrites documents so that topic, style, or factual content changes selectively. Some work applies rewriting in a poetry setting, where a parent poem is turned into an "inspired, different poem" or, under the name "LMX-rewrite," into an offspring with different diversity characteristics; a smaller line of work treats rewriting as an attack on watermarked text.

**Space of elicitation and scores.** No measurement instrument is linked to it. When papers elicit the behavior directly, they commonly use instruction prompts, and Raidar: geneRative AI Detection viA Rewriting describes detecting AI-generated content by "prompting LLMs to rewrite text and calculating the editing distance of the output." Detection-oriented work also describes scoring by measuring the edits after rewriting, but the papers do not link any named instrument to this behavior.

**What it is taken as evidence of.** The papers do not link this behavior to any construct, so they do not explicitly present it as evidence of any named construct.

## Sources

**[A Semantic Invariant Robust Watermark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)**
> The observable act of a language model modifying input text according to a prompt such as 'rewrite this for me' or 'polish this,' producing a revised version that may vary in wording, structure, or style.

## Relationships

### Associated with
- **Raidar** (measurements)
  > We introduce a method to detect AI-generated content by prompting LLMs to rewrite text and calculating the editing distance of the output. We dubbed our geneRative AI Detection viA Rewriting method Raidar. (Section Abstract)
  - [Raidar: geneRative AI Detection viA Rewriting](https://proceedings.iclr.cc/paper_files/paper/2024/file/1888b9df34b0d9eea6e009a1fdd55c4f-Paper-Conference.pdf)
