# Expert utilization
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Expert activation  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, the prevailing usage treats this construct as the extent to which experts are actually used, rather than left underused or concentrated in a small subset. One definition emphasizes whether selected experts are leveraged effectively and whether routing is more balanced, while another, under the name expert activation, emphasizes utilization of distinct experts during optimization and inference and denser use of otherwise underused experts. The main variation is whether the focus is balanced use of selected experts or broader activation of distinct experts as a way of leveraging parameter capacity.

**Space of facets.** The papers do not offer a broader taxonomy, but they use closely related labels for much the same phenomenon. Expert activation is treated as near-aligned with expert utilization, and one paper explicitly frames denser activation as mitigating low expert utilization and improving use of dead experts. Beyond this terminological variation, the papers do not distinguish formal subtypes or place it under a larger named construct.

**Space of measurement.** Papers link it to no measurement instruments and no behavioral indicators. Instead, they describe it in process terms, such as more balanced routing decisions, better utilization of dead experts, and denser expert activation, but they do not tie these descriptions to a benchmark, human evaluation, LLM-as-a-judge, probe, or analysis.

## Sources

**[Layerwise Recurrent Router for  Mixture-of-Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/250a6c6a7a7216f5dec1364e9a93abf4-Paper-Conference.pdf)**
> The degree to which selected experts are used effectively rather than being underused or dominated by a small subset of experts.

**[Multi-Head Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ab05dc8bf36a9f66edbff6992ec86f56-Paper-Conference.pdf) (as "Expert activation")**
> The degree to which distinct experts within a mixture-of-experts layer are utilized during optimization and inference, reflecting the model's capacity to leverage its parameter capacity.
