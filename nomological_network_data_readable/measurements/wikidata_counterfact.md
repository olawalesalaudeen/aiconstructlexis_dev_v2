# WikiData_counterfact
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** WikiDatacounterfact  

## State of the Field

**What it is.** Papers treat WikiData_counterfact as a dataset for knowledge editing evaluation, most commonly described as containing counterfactual statements derived from Wikidata. One paper places it within the KnowEdit benchmark and uses it among datasets selected for experiments covering knowledge insertion and knowledge modification.

**What it is claimed to measure.** Claims about what it measures are concentrated rather than dispersed. Multiple papers use WikiData_counterfact to measure Knowledge editing, and one paper also reports it as measuring Editing locality, with a Locality ↑ result on this dataset; overall, papers link it to one behavioral indicator and one construct.

**Space of uses.** In the reported uses, it is positioned as one benchmark within broader evaluation suites. It is used alongside WikiDatarecent, WikiBio, ConvSent, and ZsRE when papers evaluate editing different kinds of knowledge, and one paper describes it as one of two additional benchmarks while another reports a pilot quantitative experiment on it within KnowEdit.

## Sources

**[Precise Localization of Memories: A Fine-grained Neuron-level Knowledge Editing Technique for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/01db36a646c07c64dd39a92b4eceb417-Paper-Conference.pdf) (as "WikiDatacounterfact")**
> A dataset used for knowledge editing evaluation that contains counterfactual statements derived from Wikidata.

## Relationships

### → WikiData_counterfact
- **Knowledge editing** (behaviors tasks) — *measured_by*
  > we edit different kinds of knowledge: WikiDatarecent, WikiDatacounterfact (Cohen et al., 2024), WikiBio (Hartvigsen et al., 2024), ConvSent (Mitchell et al., 2022), and ZsRE (Yao et al., 2023). (Section 3.1)
  - [Unlocking Efficient, Scalable, and Continual Knowledge Editing with Basis-Level Representation Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f89a23a19d1617e7fb16d4f7a049ce2-Paper-Conference.pdf)
- **Editing locality** (constructs) — *measured_by*
  > WikiDatacounterfact ... Locality ↑ (Table 3)
  - [In-Context Editing: Learning Knowledge from Self-Induced Distributions](https://proceedings.iclr.cc/paper_files/paper/2025/file/c0ff9e52e94ae331bc0f2d28be06a9ca-Paper-Conference.pdf)
