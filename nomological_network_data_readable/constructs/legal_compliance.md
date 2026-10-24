# Legal compliance
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Legality  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, the prevailing framing treats legal compliance, or legality, as a latent model property of adhering to legal rules and regulations. One definition states this broadly for generated responses or instructions, including cases where misalignment yields unlawful instructions, while another narrows it to established regulatory standards in privacy and safety, naming GDPR, the EU AI Act, and HIPAA for how models process or respond to inputs. The definitions differ mainly in scope, broad legal adherence versus compliance under specific privacy and safety frameworks, while agreeing that the construct is a latent disposition or capacity of the model.

**Space of facets.** Papers use legality and legal compliance as closely aligned names for the same kind of latent adherence property. One paper places legality alongside stereotypes and morality as one of three aspects in an alignment evaluation, while another situates legal compliance within privacy and safety work, emphasizing lawful, safe, and privacy-preserving systems and referring to contextualized legal reasoning. The papers do not explicitly break it into further subtypes beyond this broad versus privacy-and-safety-specific framing.

**Space of measurement.** Operationalization is sparse in the papers. No measurement instrument is linked to legal compliance, and no behavioral indicator is linked to it. The papers nonetheless describe it through cases such as models providing unlawful instructions, through experiments that include legality as an evaluated aspect, and through compliance results used as rewards when enhancing contextualized legal reasoning, but they do not attach these uses to a named benchmark, human evaluation protocol, judge model, or probe.

**Links.** In the papers, the only reported construct link is to Reasoning. One paper claims a causal relationship from Reasoning to legal compliance, describing an extended auxiliary knowledge base introduced to facilitate reasoning on privacy compliance. No correlational or undirected related links are reported.

## Sources

**[ALI-Agent: Assessing LLMs'  Alignment with Human Values via Agent-based Evaluation](https://proceedings.neurips.cc/paper_files/paper/2024/file/b35c38f70065ac6c694089ca93a015bb-Paper-Conference.pdf) (as "Legality")**
> The model's latent capacity to understand and adhere to legal rules and regulations when generating responses or instructions.

**[Context Reasoner: Incentivizing Reasoning Capability for Contextualized Privacy and Safety Compliance via Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.44.pdf)**
> The model's latent disposition to adhere to established legal and regulatory standards such as GDPR, EU AI Act, and HIPAA when processing or responding to inputs involving privacy and safety.

## Relationships

### → Legal compliance
- **Contextual understanding** (constructs) — *causes*
  > Consequently, better context-understanding abilities further improve legal compliance, as indicated by the results of Table 2. (Section 5.2)
  - [PrivaCI-Bench: Evaluating Privacy with Contextual Integrity and Legal Compliance](https://aclanthology.org/2025.acl-long.518.pdf)
