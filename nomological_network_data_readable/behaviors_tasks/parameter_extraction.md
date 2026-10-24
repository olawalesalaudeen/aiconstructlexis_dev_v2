# Parameter extraction
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Parameter resolution, Parameterization, Parameter selection  

## State of the Field

**Space of definitions.** Across the papers, the dominant framing is the model's production of correct argument values for a selected function, tool, or API call. Most definitions describe identifying, extracting, selecting, or assigning the required parameters, while one narrower framing focuses on filling in missing API parameter values from dialogue context or user replies. One paper makes the extraction step concrete by describing how natural language orders are parsed to identify requested items and extract values such as visitor counts, ticket types, or special conditions, which are then converted into input arguments.

**Variants.** Papers use several near-synonymous labels for the behavior: parameter extraction, parameter resolution, parameterization, and parameter selection. The studied settings range from natural language queries mapped to function-call arguments, to dialogue-based API use where missing values are resolved from context or user replies, to tool-use evaluations that isolate parameter selection, including per-dialogue turn and single-tool scenarios. The dialogue-based examples include assigning values such as food="fried chicken" and platform="Lyft".

**Space of elicitation and scores.** No measurement instrument is linked to it. In the task descriptions themselves, papers score it with accuracy-style criteria, including "parameter resolution accuracy," per-dialogue turn parameter selection accuracy, and, in single-tool settings, Parameter Selection Accuracy (PS).

**What it is taken as evidence of.** No construct is linked to it.

## Sources

**[PricingLogic: Evaluating LLMs Reasoning on Complex Tourism Pricing Tasks](https://aclanthology.org/2025.emnlp-main.393.pdf)**
> The observable task of identifying and extracting specific values from a natural language query to serve as arguments for a function call.

**[AskToAct: Enhancing LLMs Tool Use via Self-Correcting Clarification](https://aclanthology.org/2025.emnlp-main.682.pdf) (as "Parameter resolution")**
> The model fills in missing API parameter values from dialogue context or user replies.

**[Improving Large Language Models Function Calling and Interpretability via Guided-Structured Templates](https://aclanthology.org/2025.emnlp-main.1242.pdf) (as "Parameterization")**
> The observable action of identifying and assigning correct values to the parameters required by a selected function.

**[MTU-Bench: A Multi-granularity Tool-Use Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4d13b2d99519c5415661dad44ab7edcd-Paper-Conference.pdf) (as "Parameter selection")**
> The observable action of identifying and providing the correct arguments or parameters for a selected tool call.

## Relationships

### Associated with
- **Tool use** (behaviors tasks)
  > In the first step, we facilitate the slot filling by inputting comprehensive medical records, tool descriptions, and their function docstrings into the LLM... enabling accurate information choices, and then to use the tool appropriately. (Section 3.3)
  - [MeNTi: Bridging Medical Calculator and LLM Agent with Nested Tool Calling](https://aclanthology.org/2025.naacl-long.263.pdf)
