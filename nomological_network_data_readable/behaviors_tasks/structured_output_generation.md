# Structured output generation
**Type:** Behavior  
**Referenced in:** 18 papers  
**Also known as:** Result formatting, Configuration generation, JSON generation, Netlist generation, Formalized representation generation, Table generation, Structured generation, Structured text generation  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing is producing outputs that adhere to a required structure, most often JSON and other explicitly specified formats. Many descriptions emphasize strict compliance with schemas, API or function-call definitions, or other parseable formats, and one paper states that a successful function call must strictly match the API-specified format. Smaller lines of work define the behavior more narrowly as fixed result formatting or syntactically valid JSON, while others specify the target structure more task-specifically, including XML or YAML outputs, code or chain-of-thought traces, tables, formalized dialogue representations, netlists, or standardized software artifacts; some definitions also include extracting the relevant information into that structure.

**Variants.** Variants most often stay close to JSON-focused function-calling and result formatting into fixed structures. Smaller lines of work study configuration generation in YAML, table generation, and netlist generation, while other papers use formalized dialogue representations or standardized software artifacts such as requirements documents, designs, flowcharts, and interface definitions. Another variant frames it as structured text generation from natural language, where the model follows example instructions and extracts named entities into JSON format.

**Space of elicitation and scores.** Operationalization is sparse in the recorded relationships: papers link this behavior to one measurement instrument, TACT. TACT assesses whether a model can construct the appropriate table from a TACT instruction and its corresponding text. In the task descriptions themselves, elicitation commonly uses prompts or specifications that demand fixed-format responses, including API definitions, natural language prompts, and 2-shot prompts for structured outputs.

**What it is taken as evidence of.** No construct is linked to this behavior in the recorded relationships, so the papers do not specify what construct it indicates. The only other recorded link is a related one: one paper reports that structured output generation is related to Tool use, and notes performance variations between JSON and string outputs under different compression techniques.

## Sources

**[ToolACE: Winning the Points of LLM Function Calling](https://proceedings.iclr.cc/paper_files/paper/2025/file/663865ea167425c6c562cb0b6bcf76c7-Paper-Conference.pdf)**
> Producing outputs in a required structured format that matches API or function-call specifications.

**[Planning Anything with Rigor: General-Purpose Zero-Shot Planning with LLM-based Formalized Programming](https://proceedings.iclr.cc/paper_files/paper/2025/file/a1c8a68e52499c9396854e3f967e37c0-Paper-Conference.pdf) (as "Result formatting")**
> Converting solver outputs into a fixed structured output format.

**[Earley-Driven Dynamic Pruning for Efficient Structured Decoding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25v/sun25v.pdf) (as "JSON generation")**
> The task of producing text that is a syntactically valid JSON object, often based on a natural language prompt or other input.

**[AUTOCIRCUIT-RL: Reinforcement Learning-Driven LLM for Automated Circuit Topology Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/vijayaraghavan25a/vijayaraghavan25a.pdf) (as "Netlist generation")**
> Outputting a textual representation of a circuit as a list of component-to-node connections, formatted using incident encoding.

**[PINNsAgent: Automated PDE Surrogation with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wuwu25a/wuwu25a.pdf) (as "Configuration generation")**
> The task of producing structured configuration files, such as in YAML format, that specify the hyperparameters and settings for an experiment.

**[From Schema to State: Zero-Shot Scheme-Only Dialogue State Tracking via Diverse Synthetic Dialogue and Step-by-Step Distillation](https://aclanthology.org/2025.emnlp-main.85.pdf) (as "Formalized representation generation")**
> The production of structured, unambiguous dialogue turn representations that include speaker intention, relevant slots, and explanatory reasoning, derived from natural language utterances.

**[From Automation to Autonomy: A Survey on Large Language Models in Scientific Discovery](https://aclanthology.org/2025.emnlp-main.895.pdf) (as "Table generation")**
> Creating structured tabular summaries from scientific literature or data.

**[Pre3: Enabling Deterministic Pushdown Automata for Faster StructuredLLMGeneration](https://aclanthology.org/2025.acl-long.551.pdf) (as "Structured generation")**
> Producing model outputs that conform to a specified syntactic format such as JSON, code, or chain-of-thought traces.

**[Middle-Layer Representation Alignment for Cross-Lingual Transfer in Fine-Tuned LLMs](https://aclanthology.org/2025.acl-long.778.pdf) (as "Structured text generation")**
> Producing well-formed, structured outputs such as JSON from natural language input, requiring adherence to format and accurate information extraction.

## Relationships

### Structured output generation →
- **TACT** (measurements) — *measured_by*
  > We assess the capabilities of LLMs to generate the appropriate tables given a TACT instruction and its corresponding text, tasking the model to construct the correct table based on the specified instruction. (Section 5.1)
  - [TACT: Advancing Complex Aggregative Reasoning with Information Extraction Tools](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d7025dc9bd4c8b6fb1eef80cc618008-Paper-Datasets_and_Benchmarks_Track.pdf)
