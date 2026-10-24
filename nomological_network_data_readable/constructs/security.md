# Security
**Type:** Construct  
**Referenced in:** 6 papers  

## State of the Field

**Definition agreement:** Conflicting. Each paper uses security for a different property of a different object: one means a model's resistance to generating harmful content, another means a watermarking scheme's resistance to reverse-engineering or theft, and another means a defense's success at blocking attacks on an LLM application. Because these are not the same phenomenon or the same kind of thing, papers using these definitions would not be studying the same construct.

**Space of definitions.** Across the papers, security is not used in a single stable sense. One recurring formulation treats it as a latent property concerning resistance to generating harmful or malicious content, but other definitions apply the term to different objects: the resilience of a watermarking scheme against attacks aimed at reverse-engineering, stealing, or illegitimately applying watermark rules, and the degree to which a defense prevents attackers from successfully exploiting an LLM application. The main disagreement is about what is said to be secure, namely the model, the watermarking scheme, or the defense and application.

**Space of facets.** The papers do not provide a shared facet structure or subtype taxonomy. Instead, the same label is used for different targets, and it is discussed alongside utility, robustness, text quality, and usability, including formulations about trade-offs among robustness, text quality, and security and about ensuring security with minimal impact on usability.

**Space of measurement.** Security is linked to 1 measurement instrument, AgentDojo, and to no behavioral indicators or constructs. AgentDojo is described as evaluating the utility and security of AI agents in dynamic tool-calling environments with untrusted data. A separate measurement framing appears in one paper that calls security the strength of a defense and proposes Attacker Failure Rate as the expected fraction of attackers that cannot generate a successful exploit; this matches the defense and application framing used in that paper.

## Sources

**[Exploiting LLM Quantization](https://proceedings.neurips.cc/paper_files/paper/2024/file/496720b3c860111b95ac8634349dcc88-Paper-Conference.pdf)**
> The latent property of a model regarding its resistance to generating harmful or malicious content.

## Relationships

### Security →
- **AgentDojo** (measurements) — *measured_by*
  > AgentDojo evaluates the utility and security of AI agents in dynamic tool-calling environments with untrusted data.
  - [AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/97091a5177d8dc64b1da8bf3e1f6fb54-Paper-Datasets_and_Benchmarks_Track.pdf)
