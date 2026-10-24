# Knowledge acquisition
**Type:** Construct  
**Referenced in:** 8 papers  
**Also known as:** Knowledge internalization, Fact learning, Knowledge gain  

## State of the Field

**Definition agreement:** Consensus. Most papers define knowledge acquisition as a model internalizing, encoding, storing, retaining, or increasing factual or conceptual knowledge in its parameters or memory after exposure to training data or other new information. These differences are mainly about source or mechanism, while only a single outlying definition shifts to retrieving and using knowledge, so the dominant usage is still the same core phenomenon.

**Space of definitions.** Across papers, the prevailing usage treats knowledge acquisition as learning or internalizing facts, concepts, or associations, often from training data, rather than only as retrieving knowledge at decision time. Several definitions describe a model acquiring facts, concepts, or simple associations from training data, storing them in weights or other internal representations, and in one case absorbing tool-generated solutions into parametric knowledge so problems can later be solved without tool calls; one paper also notes that learning a fact may require "hundreds to thousands of diverse representations". A minority framing treats it as a latent ability to retrieve and use relevant factual or contextual knowledge from external sources or internal representations to support decision-making, and another defines it as knowledge gain, the increase in knowledge or certainty after new information, estimated through shifts in an internal knowledge distribution.

**Space of facets.** Authors use several neighboring labels for partly overlapping ideas. Fact learning is used for encoding and storing factual information in model weights, with one paper saying it can occur at both early and late layers and yield different forms of generalization; knowledge internalization names the incorporation of external, tool-generated solutions into parametric knowledge; and knowledge gain names the increase in knowledge or certainty after exposure to new information. Another paper treats simple associations, such as celebrity birthdays, capital cities, or relations between concepts, as a subset of what models need to learn, so papers place acquisition alongside internalization, fact learning, and knowledge gain rather than under a single shared breakdown.

**Space of measurement.** Papers link the construct to 1 measurement instrument and 1 behavioral indicator. The measurement instrument is AgentBench, which is described as systematically evaluating core abilities including knowledge acquisition, while the linked behavioral indicator, Self-reflection, appears in a causal claim rather than as a direct measure. This operationalization follows the ability framing more than the process-oriented definitions about storing facts in weights, internalizing tool outputs, or estimating knowledge gain from shifts in a model's knowledge distribution, and no additional linked instrument is named.

**Links.** Only a few links are reported. One paper claims a causal relationship from knowledge acquisition to Reasoning, reporting enhanced reasoning capabilities through effective knowledge internalization, and another claims a causal relationship from Self-reflection to knowledge acquisition, saying self-generated data with iterative Direct Preference Optimization foster deeper internalization of underlying knowledge. Separate papers report that Factuality is related to knowledge acquisition, and that knowledge acquisition is related to Scientific reasoning; no correlations are reported.

## Sources

**[AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf)**
> The latent ability to retrieve and utilize relevant factual or contextual knowledge from external sources or internal representations to support decision-making.

**[Extractive Structures Learned in Pretraining Enable Generalization on Finetuned Facts](https://raw.githubusercontent.com/mlresearch/v267/main/assets/feng25m/feng25m.pdf) (as "Fact learning")**
> The process by which a language model encodes and stores factual information from training data into its weights.

**[Adapting While Learning: Grounding LLMs for Scientific Problems with Tool Usage Adaptation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lyu25a/lyu25a.pdf) (as "Knowledge internalization")**
> The process by which a model incorporates external, tool-generated solutions into its parametric knowledge, allowing it to solve problems without relying on tool calls.

**[SePer: Measure Retrieval Utility Through The Lens Of Semantic Perplexity Reduction](https://proceedings.iclr.cc/paper_files/paper/2025/file/c44c4afd77d5ee760e7f4bed0c50f878-Paper-Conference.pdf) (as "Knowledge gain")**
> The increase in an LLM's knowledge or certainty about a topic resulting from exposure to new information, which can be estimated by the shift in its internal knowledge distribution.

## Relationships

### Knowledge acquisition →
- **AgentBench** (measurements) — *measured_by*
  > AGENTBENCH thus systematically evaluate an LLM’s core abilities, including following instructions (Ouyang et al., 2022), coding (Chen et al., 2021), knowledge acquisition (Joshi et al., 2017; Talmor et al., 2019), logical reasoning (Srivastava et al., 2023), and commonsense grounding (Shridhar et al., 2020a).
  - [AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > In this study, we introduced TinyThinker to enhance reasoning capabilities through effective knowledge internalization. (Section 6)
  - [TinyThinker: Distilling Reasoning through Coarse-to-Fine Knowledge Internalization with Self-Reflection](https://aclanthology.org/2025.naacl-long.309.pdf)

### Associated with
- **Document utility** (constructs)
  > In this work, we propose the perspective to measure retrieval utility based on the knowledge gain of LLMs Belkin (1980); Belkin et al. (1982a;b). (Section 1)
  - [SePer: Measure Retrieval Utility Through The Lens Of Semantic Perplexity Reduction](https://proceedings.iclr.cc/paper_files/paper/2025/file/c44c4afd77d5ee760e7f4bed0c50f878-Paper-Conference.pdf)
