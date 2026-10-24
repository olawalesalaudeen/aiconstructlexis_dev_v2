# Format following ability
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Format-instruction following, Format adherence  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, the prevailing usage treats this construct as a model capability to make outputs match requested formatting constraints or predefined structural templates. The examples are concrete, including answers enclosed in bold, structured lists, and outputs with specified tags or sections. One definition makes the scope explicit as adherence to format constraints independent of task performance, while another emphasizes consistent conformity to a strict template such as `<rewrite> rewrite here </rewrite>`.

**Space of facets.** The papers use closely aligned labels, "format-instruction following" and "format adherence", and do not distinguish them as separate constructs. One paper formalizes a "format-instruction following function FC", while another places format adherence alongside reasoning and query rewriting as part of a model's "fundamental capabilities". No further subtype structure is specified in the definitions or snippets.

**Space of measurement.** The papers do not link this construct to any measurement instrument or behavioral indicator. The only explicit operational detail is a "rule-based heuristic" used to determine a format-instruction following function FC, and one paper describes the capability in a setting where outputs are required to strictly follow the structure `<rewrite> rewrite here </rewrite>`.

**Links.** The papers do not report causal, correlational, or other related links involving this construct.

## Sources

**[LLMs Are Biased Towards Output Formats! Systematically Evaluating and Mitigating Output Format Bias of LLMs](https://aclanthology.org/2025.naacl-long.15.pdf) (as "Format-instruction following")**
> The latent capability of an LLM to adhere to specified output formatting constraints, such as enclosing answers in bold or generating structured lists, independent of task performance.

**[ConvSearch-R1: Enhancing Query Reformulation for Conversational Search with Reasoning via Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.1349.pdf) (as "Format adherence")**
> The model's capability to consistently produce outputs that conform to a predefined structural template, such as including specific tags or sections.
