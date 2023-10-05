import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, Renderer2 } from "@angular/core";
import { style, animate, AnimationBuilder, AnimationPlayer } from "@angular/animations";

@Directive({ selector: "[animate]" })
export class AnimationDirective implements OnInit {
    original: any;
    copy: any;
    private player: AnimationPlayer | undefined;
    private timing = "400ms ease-in-out";

    @Input('animatePos0') pos0: boolean = false;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private builder: AnimationBuilder,
        private renderer: Renderer2
    ) { }

    ngOnInit() {
        this.original = this.viewContainer.createEmbeddedView(
            this.templateRef
        ).rootNodes[0];
        setTimeout(() => {
            this.copy = this.viewContainer.createEmbeddedView(
                this.templateRef
            ).rootNodes[0];
            this.renderer.setStyle(this.original, "visibility", "hidden");
            const rect = { top: this.original.offsetTop, left: this.original.offsetLeft };
            this.renderer.setStyle(this.copy, "position", "absolute");
            this.renderer.setStyle(this.copy, "top", rect.top + 200 + "px");
            this.renderer.setStyle(this.copy, "left", rect.left + 50 + "%");
            this.renderer.setStyle(this.copy, "transform", "translate(-50%, -50%)");
        }, 10);
    }

    animateGo() {
        setTimeout(() => {
            const rect = { top: this.original.offsetTop, left: this.original.offsetLeft }
            const myAnimation = this.builder.build([
                animate(this.timing, style({ top: rect.top + 200, left: rect.left  + 50 + "%" }))
            ]);
            this.player = myAnimation.create(this.copy);
            this.player.play();
        });
    }
}
