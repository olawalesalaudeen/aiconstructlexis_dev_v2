# Format following
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Text formatting, Format-consistent output generation, Template adherence, Rule following  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats format following as producing outputs that match a requested layout, template, or explicit formatting rule. Papers describe it as arranging text into a specific structure, obeying instruction-specified formatting or style constraints, and applying required section headers, organ labels, and numbering rules, with deviations penalized during evaluation. A smaller formulation treats it as staying consistent with the format shown in in-context examples, and one study notes outputs are "often generated in an inconsistent format" when that example format is disrupted.

**Variants.** Papers study this behavior in several settings: general text formatting for content creation, rule following under explicit instructions, template adherence in clinical reporting, and format-consistent output generation in arithmetic in-context learning. The named variants are text formatting, rule following, template adherence, and format-consistent output generation. In the structured-report variant, success includes correctly using Findings and Impression section headers and other template rules, while in the arithmetic variant success includes matching whether answers are given as numerals or written English.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior. Where papers describe elicitation or scoring directly, they check whether the output conforms to the requested structure, for example by penalizing deviations from a structured report template or by evaluating whether the model follows the formatting constraints in the instruction.

**What it is taken as evidence of.** The papers do not explicitly connect format following to a broader construct, and no construct is linked to it. They therefore do not present an explicit view of what broader construct it reflects.

## Sources

**[SmartBench: Is Your LLM Truly a Good Chinese Smartphone Assistant?](https://aclanthology.org/2025.emnlp-main.194.pdf) (as "Text formatting")**
> The task of arranging text into a specific layout or structure as requested.

**[Interpretability Analysis of Arithmetic In-Context Learning in Large Language Models](https://aclanthology.org/2025.emnlp-main.92.pdf) (as "Format-consistent output generation")**
> Producing answers in the same format (e.g., numeral vs. written English) as the in-context example, even when the example is arithmetically incorrect.

**[Structuring Radiology Reports: Challenging LLMs with Lightweight Models](https://aclanthology.org/2025.emnlp-main.392.pdf) (as "Template adherence")**
> Correctly applying section headers, organ system labels, and formatting rules (e.g., numbered impressions) as defined in a clinical reporting template.

**[IHEval: Evaluating Language Models on Following the Instruction Hierarchy](https://aclanthology.org/2025.naacl-long.425.pdf) (as "Rule following")**
> Producing outputs that obey explicit formatting or style constraints specified in instructions.
